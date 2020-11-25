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
export const query = document.querySelector

/** Gets element by id */
export const getEl = canUseDom && document.getElementById
