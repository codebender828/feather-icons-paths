import h from 'hyperscript'
import { isArray } from 'lodash-es'
import { css } from './css'
import { useId } from './generators'
import initializeObserver from './observer'
import { createPopoverInstance } from './popover'

export const punctuationMarks = ['.', '。', '.', ',', '!', '-', '_', '&', '*', ';', ':', '?', '+', '{', '}', '[', ']', '|', '《', '》', '：', '"', '；', '`', '<', '>']
export const isPunctuationMark = char => punctuationMarks.includes(char)

const alphanumeric = /^[0-9a-zA-Z]+$/
export const isAlphanumeric = char => char && char.match(alphanumeric)
const escapePopover = (punc) => h('span.kadukadu-punctuation', punc)

/**
 * Creates render function for words returned from parser
 * @param {import('./defaults').RendererOptions} options
 * @returns {() => HTMLParagraphElement} renderer function
 */
export const createRenderer = (options) => {
  if (!('target' in options)) {
    console.error('[Kadukadu]: Render target element expected in createKadukadu options')
    throw new Error('[Kadukadu]: Render target element expected in createKadukadu options')
  }

  let target
  try {
    target = document.getElementById(options.target)
    console.info('[Kadukadu]: Render target found. Rendering to:', target)
  } catch (error) {
    console.error(`[Kadukadu]: Unable to locate renderer target of id "${options.target}"`)
  }

  if (!target) {
    console.error('[Kadukadu]: expects a render target element')
    throw new Error('[Kadukadu]: expects a render target element')
  }

  window.$kadukadu.options.renderer.target = target
  const translationStrategy = window.$kadukadu.options.translationStrategy

  // Handle creation of popover instance
  if (options.showPopover) {
    createPopoverInstance(options)
    initializeObserver(target)
  }

  // If user provides custom render function, they can completely
  // override kadukadu's rendering scheme
  if (options.render && (typeof options.render === 'function')) {
    const render = (sentence, id) => {
      const rendered = options.render(h, sentence, id)
      target.appendChild(rendered)
      return [rendered, sentence]
    }
    return render
  }

  /**
   * Render function
   * @param {import('./parser').KadukaduWord[]} sentence
   * @returns {HTMLParagraphElement}
   * */
  const render = (sentence, id) => {
    if (!isArray(sentence)) return

    const paragraph = `p.mb-${options.lineSpacing}.${options.transliteration ? classes.transliterationSentence : ''}`

    if (options.transliteration) {
      const nodes = sentence.map(word => {
        if (
          isPunctuationMark(word.text) ||
          (translationStrategy.startsWith('zh') && isAlphanumeric(word.text))
        ) {
          return escapePopover(word.text)
        }
        const isWord = !!word.transliteration
        return h(`span${word.id ? '.data-kk-word' : ''}${word.hsk ? `.hsk${word.hsk}` : ''}.${classes.char}${isWord ? '.kadukadu-character' : ''}`, {
          'data-word': JSON.stringify(word),
          'data-hsk': word.hsk,
          'data-node-id': useId(),
          ...isWord && { 'data-kk-word': '' },
          ...options.events || {}
        }, [
          word.text,
          isWord
            ? h(`span.${classes.transliteration}`, {
                'data-transliteration': ''
              }, [word.transliteration])
            : null
        ])
      })

      const rendered = h(paragraph, {
        attrs: {
          'data-kadukadu-render-id': id
        }
      }, nodes)

      target.appendChild(rendered)

      return [rendered, sentence]
    } else {
      const rendered = h(paragraph, {
        attrs: {
          'data-kadukadu-render-id': id
        }
      }, sentence.map(word => {
        if (
          isPunctuationMark(word.text) ||
          (translationStrategy.startsWith('zh') && isAlphanumeric(word.text))
        ) {
          return escapePopover(word.text)
        }

        const isWord = !!word.transliteration

        return h(`span.data-kk-word.hsk${word.hsk}.${classes.char}${isWord ? '.kadukadu-character' : ''}`, {
          'data-word': JSON.stringify(word),
          'data-hsk': word.hsk,
          'data-node-id': useId(),
          ...word.transliteration && { 'data-kk-word': '' },
          ...options.events || {}
        }, word.text || word.text)
      }))

      target.appendChild(rendered)

      return [rendered, sentence]
    }
  }

  return render
}

const classes = {
  withPinyinBlock: css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  `,
  transliterationSentence: css`
    line-height: 2.4;
  `,
  char: css`
    cursor: pointer;
    position: relative;
    margin: 0 5px;
  `,
  transliteration: css`
    display: block;
    position: absolute;
    bottom: 90%;
    left: 50%;
    transform: translateX(-50%);
    visibility: visible;
    font-size: 9.5px;
    color: var(--gray-500);
    white-space: nowrap;
  `
}
