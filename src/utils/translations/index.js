import { encode } from 'querystring'
import { assignIn } from 'lodash-es'
import { v4 as uuidv4 } from 'uuid'
import { TRANSLATION_SERVICE } from '../defaults'
import { getByMaxConfidence } from './utils/confidence'
import { WORD_NAMES_ZH } from './utils/grammar'

/**
 * Creates a new translator instance
 * @param {import('../defaults').KadukaduOptions} options Create translator options
 * @param {String} SUBSCRIPTION_KEY Subscription key for translation
 * @param {String} REGION Region. Defaults to eastasia
 * @returns {(words: String[]) => {}} Translator function
 */
export const createTranslator = (options, SUBSCRIPTION_KEY, REGION = TRANSLATION_SERVICE.LOCATION) => {
  // Word id
  let id = 0

  // Create client id to uniquely identify user
  const clientId = uuidv4()
  const headers = {
    'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
    'Ocp-Apim-Subscription-Region': REGION,
    'Content-type': 'application/json',
    'X-ClientTraceId': clientId
  }

  const from = options.sourceLanguage
  const to = options.targetLanguage

  if (!SUBSCRIPTION_KEY || !REGION) {
    console.error(`[Kadukadu]: Expected SUBSCRIPTION_KEY and REGION to be defined. Instead got "${JSON.stringify({ API_KEY: SUBSCRIPTION_KEY, REGION })}"`)
  }

  /**
   * In the future perhaps we can use a Proxy/Reflect
   * but for now a POJO will suffice
   */
  window.$kadukadu.dictionary = {}
  const cache = window.$kadukadu.dictionary

  /**
   * Translates a word by looking it up in the dictionary.
   * @param {String} word
   * @returns {Promise<String[]>}
   */
  const lookupWord = async (word) => {
    if (typeof word !== 'string') {
      throw new Error('Cannot translate non-string words. Support not yet added')
    }

    const query = encode({
      'api-version': '3.0',
      from,
      to
    })

    const response = await fetch(`${TRANSLATION_SERVICE.ENDPOINT}/dictionary/lookup?${query}`, {
      method: 'POST',
      headers,
      body: JSON.stringify([
        { text: word }
      ])
    })

    const [res] = await response.json()
    const translations = res.translations.map(translation => assignIn(translation, {
      type: WORD_NAMES_ZH[translation.posTag]
    }))

    const translationsArray = translations.map(translation => translation.normalizedTarget)

    return {
      translations: translations,
      translationsArray,
      translationsText: translations.map(translation => translation.normalizedTarget).join(', '),
      mostConfident: getByMaxConfidence(translations)
    }
  }

  /**
   * Looks up the example of a word
   * @param {String} text Original word
   * @param {String} translation Translated equivalent of original word
   */
  const lookUpExample = async (text, translation) => {
    if (typeof text !== 'string') {
      throw new Error('Cannot translate non-string words. Support not yet added')
    }

    const query = encode({
      'api-version': '3.0',
      from,
      to
    })

    const response = await fetch(`${TRANSLATION_SERVICE.ENDPOINT}/dictionary/examples?${query}`, {
      method: 'POST',
      headers,
      body: JSON.stringify([
        { text, translation }
      ])
    })

    const [res] = await response.json()

    const examples = res.examples.map(example => ({
      original: `${example.sourcePrefix || ''}${example.sourceTerm || ''}${example.sourceSuffix || ''}`,
      translation: `${example.targetPrefix || ''}${example.targetTerm || ''}${example.targetSuffix || ''}`,
      ...example
    }))

    return examples
  }

  const translate = async (word) => {
    try {
      if (cache[word]) {
        return cache[word]
      }
      const translations = await lookupWord(word)
      const examples = await lookUpExample(word, translations.mostConfident.normalizedTarget)
      const translation = {
        mostConfident: translations.mostConfident,
        translations,
        examples,
        id: ++id
      }
      cache[word] = translation
      return translation
    } catch (error) {
      console.warn('Could not translate word')
      console.error(error.message)
    }
  }

  return translate
}
