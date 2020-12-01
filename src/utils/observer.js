import { getEl } from './dom'

/**
 * This observer handles events for tooltips that are removed from the DOM and fixes their position
 * @param {HTMLElement|String} _target
 */
export default function initializeObserver (_target) {
  if (!('MutationObserver' in window)) return

  const target = typeof _target === 'string' ? getEl(_target) : _target
  if (!target) return

  const config = { attributes: true, childList: true, subtree: true }

  const handler = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.removedNodes) {
        const removedParagraphs = [...mutation.removedNodes]
        removedParagraphs.forEach(paragraph => {
          const nodeIds = [...paragraph.querySelectorAll('[data-node-id].kadukadu-character')]
            .map(node => node.getAttribute('data-node-id'))
            .filter(attr => attr)

          for (let i = 0; i < nodeIds.length; i++) {
            const tooltip = document.querySelector(`[tooltip-node-id=${nodeIds[i]}]`)

            // LOOOOL
            if (
              tooltip &&
              tooltip.parentElement &&
              tooltip.parentElement.parentElement &&
              tooltip.parentElement.parentElement.parentElement &&
              tooltip.parentElement.parentElement.parentElement
            ) {
              const popper = tooltip.parentElement.parentElement.parentElement
              if (popper.hasAttribute('data-tippy-root')) {
                console.log({ popper })
                popper.style.position = 'fixed'
              }
            }
          }
        })
      } else if (mutation.type === 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.')
      }
    }
  }

  const observer = new MutationObserver(handler)
  observer.observe(target, config)
}
