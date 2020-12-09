import { reactive } from '@vue/reactivity'
import { isUndefined, merge } from 'lodash-es'

import { KADUKADU_DEFAULT_OPTIONS, TRANSLATION_SERVICE } from './utils'
import { bindToWindow } from './utils/dom'
import { createSentenceParser } from './utils/parser'
import { areYouinChina } from './utils/geolocation'
import { loadDictionary } from './utils/loaders'
import { createTranslator } from './utils/translations'

let dictionary

/**
 * Creates a new Kadukadu instance
 * @param {import('./utils/defaults').KadukaduOptions} userOptions
 */
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

  /** Set translation strategy */
  options.translationStrategy = `${options.sourceLanguage}-${options.targetLanguage}`

  /**
   * Initialize Kadukadu instance
   * @returns {Promise<(value: String) => HTMLParagraphElement>}
   * */
  const init = async () => {
    try {
      const isInChina = await areYouinChina()
      console.log({ isInChina })

      const strategy = options.translationStrategy
      const dictionaryUrl = isInChina
        ? `https://assets.akkadu.cn/kadukadu/_${strategy}.json`
        : `https://assets.akkadu.com/kadukadu/_${strategy}.json`

      // TODO: remove
      console.log('Kadukadu Options', options)

      if (options.translationStrategy.startsWith('zh')) {
        console.log({ dictionaryUrl })
        dictionary = await loadDictionary(dictionaryUrl, options.onProgress)
      } else {
        dictionary = {}
      }

      /** After initialization, we then bind options to global scope */
      bindToWindow({
        $kadukadu: {
          options,
          dictionary
        }
      })

      /** ************* TRANSLATOR CODE - FOR NOW, ONLY VIABLE FOR EN->ZH *********************** */
      if (options.sourceLanguage === 'en') {
        window.$kadukadu.translator = createTranslator(options, TRANSLATION_SERVICE.KEY)
      }
      /** ***************************************************** */

      const render = createSentenceParser(options)
      return render
    } catch (error) {
      throw new Error('[Kadukadu]: ' + error.message)
    }
  }

  return {
    init,
    options
  }
}
