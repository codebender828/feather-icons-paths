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

  const handler = (mutationsList) => {
    for (const mutation of mutationsList) {
      // Only observe removed nodes
      if (mutation.type === 'childList' && mutation.removedNodes) {
        const removedParagraphs = [...mutation.removedNodes]

        // Get removed node ids from spans from removed paragraphs
        removedParagraphs.forEach(paragraph => {
          const nodeIds = [...paragraph.querySelectorAll('[data-node-id].kadukadu-character')]
            .map(node => node.getAttribute('data-node-id'))
            .filter(attr => attr)

          // Get corresponding tooltip instance
          for (let i = 0; i < nodeIds.length; i++) {
            const tooltip = document.querySelector(`[tooltip-node-id=${nodeIds[i]}]`)

            // LOOOOL
            // Get actual tippy.js instance node
            if (
              tooltip &&
              tooltip.parentElement &&
              tooltip.parentElement.parentElement &&
              tooltip.parentElement.parentElement.parentElement &&
              tooltip.parentElement.parentElement.parentElement
            ) {
              const popper = tooltip.parentElement.parentElement.parentElement
              if (popper.hasAttribute('data-tippy-root')) {
                // We can now finally fix it. :)
                popper.style.position = 'fixed'
              }
            }
          }
        })
      }
    }
  }

  const observer = new MutationObserver(handler)
  observer.observe(target, config)
}
