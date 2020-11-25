/**
 * @typedef {{ traditional: Boolean, ignoreNotFound: false, extend: ParseExtendFunction }} ParserOptions
 */

import { merge } from 'lodash-es'

/**
 * @typedef {{ id: Number, hanzi: String, pinyin: String, translations: String[], hsk: Number, }} KadukaduWord
 */

/**
  * @typedef {Function} ParseExtendFunction
  * @param {KadukaduWord}
  * @returns {KadukaduWord}
  */

/**
 * Sentence parser default options
 * @type {ParserOptions}
 */
const PARSER_DEFAULT_OPTIONS = {
  /**
   * Should parse traditional Chinese
   * @type {Boolean}
   */
  traditional: false,
  /**
   * Ignore words in a sentence that are not in the dictionary
   * @type {Boolean}
   */
  ignoreNotFound: false,
  /**
   * This function parses sentence after kadukadu's parse
   * @type {ParseExtendFunction}
   */
  extend: undefined
}

/**
 * Creates sentence -> parsed word parse function
 * @param {ParserOptions} options
 * @returns {Function} parser function
 */
export const createSentenceParser = (parserOptions) => {
  if (!('$kadukadu' in window)) {
    throw new Error('Cannot create parser instance without initializing kadukadu')
  }

  const options = merge(PARSER_DEFAULT_OPTIONS, parserOptions)

  const { dictionary } = window.$kadukadu

  console.log(dictionary['爱情'])

  /** Parser function */
  const parse = (sentence) => {
    const parsed = []
    let _word

    for (let i = 0; i < sentence.length; i++) {
      for (let j = 4; j > 0; j--) {
        const word = sentence.substr(i, j)
        if (j === 0 || word === '') continue

        const query = dictionary[word]
        if (query) {
          const found = dictionary[word]
          if (Array.isArray(found)) {
            _word = found
          } else {
            _word = found
          }
          parsed.push(_word)
          i += word.length - 1
          break
        } else {
          if (!options.ignoreNotFound) {
            if (word.length === 1) {
              parsed.push({
                hanzi: word,
                pinyin: undefined,
                hsk: undefined,
                id: undefined,
                translations: []
              })
              i += word.length - 1
              break
            }
          }
        }
      }
    }

    return parsed
  }

  return parse
}
