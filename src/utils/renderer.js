import h from 'hyperscript'
import { isArray } from 'lodash-es'
import { css } from './css'
import { createPopoverInstance } from './popover'

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

  // Handle creation of popover instance
  if (options.showPopover) {
    createPopoverInstance(options)
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
        const isWord = !!word.pinyin
        return h(`span.with-pinyin.${classes.withPinyinBlock}`, [
          isWord && h(`span.${classes.pinyin}${isWord ? '.kadukadu-character' : ''}`, {
            'data-pinyin': ''
          }, [word.pinyin]),
          h(`span.hsk${word.hsk}.${classes.char}${!isWord ? `.${classes.noPinyin}` : ''}`, {
            'data-word': JSON.stringify(word),
            'data-hsk': word.hsk,
            ...isWord && { 'data-kk-word': '' }
          }, [word.hanzi])
        ])
      })

      const rendered = h(paragraph, {
        attrs: {
          'data-kadukadu-render-id': id
        }
      }, nodes)

      target.appendChild(rendered)

      return rendered
    } else {
      const rendered = h(paragraph, {
        attrs: {
          'data-kadukadu-render-id': id
        }
      }, sentence.map(word => {
        const isWord = !!word.pinyin

        return h(`span.hsk${word.hsk}.${classes.char}${isWord ? '.kadukadu-character' : ''}`, {
          'data-word': JSON.stringify(word),
          'data-hsk': word.hsk,
          ...word.pinyin && { 'data-kk-word': '' }
        }, word.hanzi)
      }))

      target.appendChild(rendered)

      return rendered
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
