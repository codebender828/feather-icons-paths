import { isFunction } from 'lodash-es'
import { random } from './calculations'

/** Creates a delay in milliseconds */
export const waitMs = (delay = 0) => new Promise((resolve) => {
  const timeout = setTimeout(() => {
    resolve()
    clearTimeout(timeout)
  }, delay)
})

/**
 * Staggers the iteration over a number of elements in an array.
 * @param {Array<any>|Number} steps Number of stagger steps or Array of items
 * @param {Array<number>|Number} intervalRange Range of stagger steps/inteval between each stagger step
 * @param {Function} fire Callback function invoked at each stagger
 */
export const stagger = async (steps = 0, intervalRange = 0, fire = () => null, done) => {
  const length = Array.isArray(steps) ? steps.length : steps

  for (let i = 0; i < length; i++) {
    let delay
    const payload = Array.isArray(steps) ? steps[i] : i
    if (!intervalRange) {
      delay = 0
    } else if (Array.isArray(intervalRange)) {
      delay = random(...intervalRange)
    } else {
      delay = intervalRange
    }
    await waitMs(delay)
    fire(payload, i)
  }

  if (isFunction(done)) {
    done(true)
  }
}
