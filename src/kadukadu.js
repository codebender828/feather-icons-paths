import { reactive, ref } from '@vue/reactivity'
import { merge } from 'lodash-es'

import { KADUKADU_DEFAULT_OPTIONS } from './utils'
import { bindToWindow } from './utils/dom'
import { createSentenceParser } from './utils/zh/parser'

let dictionary

export function createKadukadu (userOptions = KADUKADU_DEFAULT_OPTIONS) {
  const options = reactive(merge(KADUKADU_DEFAULT_OPTIONS, userOptions))
  const parse = ref(undefined)
  const parserOptions = reactive({
    /**
     * The original and target languages for translation
     * @type {String}
     * @example
     * ```
     * 'en-es' // -> English - Spanish
     * 'zh-en' // -> Chinese - English
     * ```
     */
    translationStrategy: `${options.sourceLanguage}-${options.targetLanguage}`
  })

  /** Initialize Kadukadu */
  const init = () => new Promise((resolve, reject) => {
    import('@akkadu/kadukadu-dictionary')
      .then(({ default: _dictionary }) => {
        // eslint-disable-next-line
        dictionary = _dictionary

        /** After initialization, we then bind options to global scope */
        bindToWindow({
          $kadukadu: {
            options,
            translationStrategy: parserOptions.translationStrategy,
            dictionary
          }
        })

        const parse = createSentenceParser(parserOptions)
        resolve(parse)
      })
      .catch(e => reject(e.message))
  })

  return {
    init,
    options,
    parserOptions,
    parse
  }
}
