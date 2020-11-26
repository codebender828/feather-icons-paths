import { isObject, assign } from 'lodash-es'
import canUseDom from 'can-use-dom'

/** Binds object to window/globalThis */
export const bindToWindow = (object) => {
  if (!isObject) {
    throw new Error(`bindToWindow expected argument of type "object" but got "${typeof object}"`)
  }

  if (canUseDom) {
    assign(window, object)
  }
}

/** Query elements by selector */
export const query = (...args) => {
  if (args.length > 1) {
    const [domain, selector] = args
    return domain.querySelector(selector)
  } else {
    return document.querySelector(args[0])
  }
}

/** Gets element by id */
export const getEl = canUseDom && document.getElementById
