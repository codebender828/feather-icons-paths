import { reactive, ref } from '@vue/reactivity'
import { merge } from 'lodash-es'

import { KADUKADU_DEFAULT_OPTIONS } from './utils'

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
        const parse = createParser(parserOptions)
        resolve(parse)
      })
      .catch(e => reject(e.message))
  })

  const createParser = (createParserOptions) => {
    const parse = (sentence) => {
      console.log(sentence)
    }
    return parse
  }

  return {
    init,
    options,
    parserOptions,
    parse
  }
}
