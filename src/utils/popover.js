import h from 'hyperscript'
import { css } from './css'
import { delegate, roundArrow } from 'tippy.js'
import { query } from './dom'

/**
 * Creates tooltip element
 */
const createTooltip = () => {
  const styles = {
    wrapper: css``,
    box: css`
      position: relative;
      padding: 8px 12px;
      min-width: 300px;
      border-radius: 4px;
      background-color: var(--gray-800);
      color: var(--white);
    `,
    text: css`font-size:2.25rem;`,
    transliteration: css`
      font-size: 1.125rem;
      font-weight: 400;
      margin-left: 8px;
    `,
    hsk: css`
      font-size:.875rem;
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 0 4px;
      font-weight: 400;
      border-radius: 9999px;
    `,
    translations: css`
      font-size: 0.8em;
      font-weight: 400;
      margin-top: 16px;
    `,
    hskBadge: {
      0: css`
        background-color: var(--gray-50);
        color: var(--gray-400);
      `,
      1: css`
        background-color: var(--yellow-50);
        color: var(--yellow-400);
      `,
      2: css`
        background-color: var(--orange-50);
        color: var(--orange-400);
      `,
      3: css`
        background-color: var(--green-50);
        color: var(--green-400);
      `,
      4: css`
        background-color: var(--blue-50);
        color: var(--blue-400);
      `,
      5: css`
        background-color: var(--indigo-50);
        color: var(--indigo-400);
      `,
      6: css`
        background-color: var(--red-50);
        color: var(--red-400);
      `
    },
    translationsGroup: css`
      margin-bottom: 8px;
      font-size: 1em;
    `,
    translationsHeader: css`
      font-weight: 700;
      font-size: 1.1rem;
      font-style: italic;
      text-decoration: underline
    `
  }

  return {
    el: h(`div#kadukadu-tooltip.${styles.wrapper}`, {
      role: 'tooltip'
    }, [
      h(`div.tooltip-box.${styles.box}`, [
        h(`span#text.${styles.text}`, ''),
        h(`span#transliteration.${styles.transliteration}`, ''),
        h('span#hsk', ''),
        h(`div#translations.${styles.translations}`, '')
      ])
    ]),
    styles
  }
}

/**
 * Create popover instance
 * @param {import('./defaults').RendererOptions} options
 * */
export const createPopoverInstance = (options) => {
  const { target, popoverOptions } = options
  const { el: tooltip, styles } = createTooltip()
  window.$kadukadu.tooltipEl = tooltip

  return delegate(`#${target}`, {
    target: '.data-kk-word',
    interactive: true,
    interactiveBorder: -10,
    appendTo: () => document.body,
    animation: false,
    trigger: 'click mouseenter',
    maxWidth: 350,
    allowHTML: true,
    arrow: roundArrow,
    content (_reference) {
      const tooltip = window.$kadukadu.tooltipEl.cloneNode(true)
      const loadingText = h('p.text-center.absolute.top-4.left-4', 'Loading...')
      query(tooltip, '.tooltip-box').appendChild(loadingText)
      return tooltip.innerHTML
    },
    // Spread user's options
    ...popoverOptions?.tippy?.(styles) || {}
  })
}
