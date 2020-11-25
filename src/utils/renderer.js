import h from 'hyperscript'
import { isArray } from 'lodash-es'
import { css } from './css'

/**
 * Creates render function for words returned from parser
 * @param {RendererOptions} options
 * @returns {() => HTMLParagraphElement} renderer function
 */
export const createRenderer = (options) => {
  const { renderer } = options

  if (!('target' in renderer)) {
    console.error('[Kadukadu]: Render target element expected in createKadukadu options')
    throw new Error('[Kadukadu]: Render target element expected in createKadukadu options')
  }

  let target
  try {
    target = document.getElementById(renderer.target)
    console.info('[Kadukadu]: Render target found. Rendering to:', target)
  } catch (error) {
    console.error(`[Kadukadu]: Unable to locate renderer target of id "${renderer.target}"`)
  }

  if (!target) {
    console.error('[Kadukadu]: expects a render target element')
    throw new Error('[Kadukadu]: expects a render target element')
  }

  window.$kadukadu.options.renderer.target = target

  /**
   * Render function
   * @param {import('./parser').KadukaduWord[]} sentence
   * @returns {HTMLParagraphElement}
   * */
  const render = (sentence, id) => {
    if (!isArray(sentence)) return

    const paragraph = `p.mb-${renderer.lineSpacing}`

    if (options.pinyin) {
      console.log(sentence)

      const nodes = sentence.map(word => h(`span.with-pinyin.${classes.withPinyinBlock}`, [
        h(`span.${classes.pinyin}`, {
          'data-pinyin': ''
        }, [word.pinyin]),
        h('span', {
          'data-word': JSON.stringify(word),
          'data-hsk': word.hsk
        }, [word.hanzi])
      ]))

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
      }, sentence.map(word => h('span', {
        'data-word': JSON.stringify(word),
        'data-hsk': word.hsk
      }, word.hanzi)))

      target.appendChild(rendered)

      return rendered
    }
  }

  // render.showPinyin = () => {
  //   document.querySelectorAll('[data-pinyin]')
  // }

  return render
}

const classes = {
  withPinyinBlock: css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  `,
  pinyin: css`
    display: block;
    visibility: visible;
    font-size: 11px;
    color: var(--gray-500);
    margin: 0 3px;
  `
}
