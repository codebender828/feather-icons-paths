import h from 'hyperscript'
import { isArray } from 'lodash-es'

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

    const rendered = h(`p.mb-${renderer.lineSpacing}`, {
      attrs: {
        'data-kadukadu-render-id': id
      }
    }, sentence.map(word => h('span', {
      'data-word': JSON.stringify(word)
    }, word.hanzi)))

    target.appendChild(rendered)

    return rendered
  }

  return render
}
