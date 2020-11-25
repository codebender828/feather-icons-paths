/**
 * The motivation for this module is to handle
 * all generation of styles in JavaScript
 * since the runtime footprint is small.
 *
 * It also allows our transpiler to serve
 * up only one type of resource when
 * building the `@akkadu/kadukadu`
 * package. This means we don't
 * need to use special loaders
 * to process CSS files.
 *
 * This would otherwise have been
 * an inconvenience because the amount of tooling
 * required to process 50 lines of CSS files vs.
 * just using JS is not really worth it to me
 *
 * Added by @codebender828
 */

import { useId } from './generators'

/** Map of all generated stylesheets */
const styles = new Map()

/**
 * Appends styles to document
 * @param {String} name Name/id of stylesheet
 * @param {String} rules Style rules
 */
const appendStyles = (name, rules) => {
  if (styles.get(name)) {
    return
  }
  const style = document.createElement('style')
  style.innerHTML = rules
  style.setAttribute('id', name)
  document.head.appendChild(style)
  styles.set(name, style)
}

/**
 * Simple function to create styles and append them to DOM.
 * @param {String} strings Template literal styles
 * @param  {...any} args Template literal args
 * @returns {String} className
 */
export const css = (strings, ...args) => {
  const className = `kk-${useId()}`

  appendStyles(
    `${className}-style-sheet`,
    `.${className} {${strings.reduce(
      (acc, string, index) =>
        acc + string + (index < args.length ? args[index] : ''),
      ''
    )}}`
  )

  return className
}

/**
 * Cleanup for during development for hot-module-replacement
 * Disposed of in production build
 */
if ('module' in window) {
  if (window.module.hot) {
    window.module.hot.dispose(() => {
      styles.forEach((style) => {
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      })
      styles.clear()
    })
  }
}
