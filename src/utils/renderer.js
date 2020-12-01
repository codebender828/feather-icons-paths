import h from 'hyperscript'
import { isArray } from 'lodash-es'
import { css } from './css'
import { createPopoverInstance } from './popover'

const punctuationMarks = ['.', '。', '.', ',', '!', '-', '_', '&', '*', ';', ':', '?', '+', '{', '}', '[', ']', '|', '《', '》', '：', '"', '；', '`', '<', '>']
const isPunctuationMark = char => punctuationMarks.includes(char)

const alphanumeric = /^[0-9a-zA-Z]+$/
const isAlphanumeric = char => char && char.match(alphanumeric)
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

    const paragraph = `p.mb-${options.lineSpacing}`

    if (options.pinyin) {
      const nodes = sentence.map(word => {
        if (
          isPunctuationMark(word.hanzi) ||
          (translationStrategy.startsWith('zh') && isAlphanumeric(word.hanzi))
        ) {
          return escapePopover(word.hanzi)
        }
        const isWord = !!word.pinyin
        return h(`span.with-pinyin.${classes.withPinyinBlock}`, [
          isWord
            ? h(`span.${classes.pinyin}`, {
                'data-pinyin': ''
              }, [word.pinyin])
            : null,
          h(`span.data-kk-word.hsk${word.hsk}.${classes.char}${!isWord ? `.${classes.noPinyin}` : ''}${isWord ? '.kadukadu-character' : ''}`, {
            'data-word': JSON.stringify(word),
            'data-hsk': word.hsk,
            ...isWord && { 'data-kk-word': '' },
            ...options.events || {}
          }, [word.hanzi || word.text])
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
          isPunctuationMark(word.hanzi) ||
          (translationStrategy.startsWith('zh') && isAlphanumeric(word.hanzi))
        ) {
          return escapePopover(word.hanzi)
        }

        const isWord = !!word.pinyin

        return h(`span.data-kk-word.hsk${word.hsk}.${classes.char}${isWord ? '.kadukadu-character' : ''}`, {
          'data-word': JSON.stringify(word),
          'data-hsk': word.hsk,
          ...word.pinyin && { 'data-kk-word': '' },
          ...options.events || {}
        }, word.hanzi || word.text)
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
  char: css`
    cursor: pointer;
  `,
  pinyin: css`
    display: block;
    visibility: visible;
    font-size: 11px;
    color: var(--gray-500);
    margin: 0 3px;
  `,
  noPinyin: css`
    display: inline-block;
    transform: translateY(50%);
  `
}
