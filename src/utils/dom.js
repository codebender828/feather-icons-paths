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
