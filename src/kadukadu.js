import { reactive, ref } from '@vue/reactivity'
import { isUndefined, merge } from 'lodash-es'

import { KADUKADU_DEFAULT_OPTIONS } from './utils'
import { bindToWindow } from './utils/dom'
import { createSentenceParser } from './utils/parser'

let dictionary

export function createKadukadu (userOptions = KADUKADU_DEFAULT_OPTIONS) {
  const mergedOptions = merge(KADUKADU_DEFAULT_OPTIONS, {
    ...userOptions,
    /**
     * The original and target languages for translation. Only set after initializing as reactive variable
     * @type {String}
     * @example
     * ```
     * 'en-es' // -> English - Spanish
     * 'zh-en' // -> Chinese - English
     * ```
     */
    translationStrategy: undefined
  })

  if (isUndefined(mergedOptions.sourceLanguage) || isUndefined(mergedOptions.targetLanguage)) {
    throw new Error('[Kadukadu]: Cannot create Kadukadu translation strategy with missing "sourceLanguage" or "targetLanguage". Check your options to make sure you haven\'t provided an undefined value')
  }

  const options = reactive(mergedOptions)
  const parse = ref(undefined)

  /** Set translation strategy */
  options.translationStrategy = `${options.sourceLanguage}-${options.targetLanguage}`

  /**
   * Initialize Kadukadu instance
   * @returns {Promise<(value: String) => HTMLParagraphElement>}
   * */
  const init = () => new Promise((resolve, reject) => {
    import('@akkadu/kadukadu-dictionary')
      .then(({ default: _dictionary }) => {
        // eslint-disable-next-line
        dictionary = _dictionary

        /** After initialization, we then bind options to global scope */
        bindToWindow({
          $kadukadu: {
            options,
            dictionary
          }
        })

        const parse = createSentenceParser(options)
        resolve(parse)
      })
      .catch(e => reject(e.message))
  })

  return {
    init,
    options,
    parse
  }
}
