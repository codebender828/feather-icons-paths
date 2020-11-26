import h from 'hyperscript'
import { css } from './css'
import { delegate } from 'tippy.js'
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
    word: css`font-size:2.25rem;`,
    pinyin: css`
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
      font-size: 1rem;
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
    }
  }

  return {
    el: h(`div#kadukadu-tooltip.${styles.wrapper}`, {
      role: 'tooltip'
    }, [
      h(`div.tooltip-box.${styles.box}`, [
        h(`span#word.${styles.word}`, ''),
        h(`span#pinyin.${styles.pinyin}`, ''),
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

  return delegate(`#${target}`, {
    interactive: true,
    interactiveBorder: -10,
    appendTo: () => document.body,
    trigger: 'click mouseenter',
    maxWidth: 350,
    allowHTML: true,
    arrow: true,
    delay: [0, 0],
    content (reference) {
      const wordAttr = reference.getAttribute('data-word')
      if (wordAttr) {
        const word = JSON.parse(wordAttr)

        // Word
        query(tooltip, '#word').textContent = word.hanzi

        // Pinyin
        query(tooltip, '#pinyin').textContent = word.pinyin

        // HSK Level badge
        const hsk = query(tooltip, '#hsk')
        hsk.textContent = 'HSK level: ' + word.hsk
        hsk.className = `${styles.hskBadge[word.hsk]} ${styles.hsk}`

        // Translations
        const translations = query(tooltip, '#translations')
        translations.innerHTML = word.translations.map((item) => {
          return `<p>${item}</p>`
        }).join('')
      }
      return tooltip.innerHTML
    },
    // Spread user's options
    ...popoverOptions.tippy || {},
    target: '[data-kk-word]'
  })
}
