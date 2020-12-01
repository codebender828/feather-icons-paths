/**
 * @typedef {{ traditional: Boolean, ignoreNotFound: false, extend: ParseExtendFunction }} ParserOptions
 */

/**
 * @typedef {{ id: Number, hanzi: String, pinyin: String, translations: String[], hsk: Number, }} KadukaduWord
 */

/**
  * @typedef {Function} ParseExtendFunction
  * @param {KadukaduWord}
  * @returns {KadukaduWord}
  */

import { merge } from 'lodash-es'
import { createRenderer } from './renderer'

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
 * @returns {(string: String) => HTMLParagraphElement} parser function
 */
export const createSentenceParser = (parserOptions) => {
  if (!('$kadukadu' in window)) {
    throw new Error('Cannot create parser instance without initializing kadukadu')
  }

  const options = merge(PARSER_DEFAULT_OPTIONS, parserOptions)
  const { dictionary } = window.$kadukadu

  let renderId = 1

  const render = createRenderer(options.renderer)
  /** Parser function */
  const parse = (sentence) => {
    ++renderId
    const parsed = []
    let word

    for (let i = 0; i < sentence.length; i++) {
      for (let j = 4; j > 0; j--) {
        const testWord = sentence.substr(i, j)
        if (j === 0 || testWord === '') continue

        const query = dictionary[testWord]
        if (query) {
          const found = dictionary[testWord]
          if (Array.isArray(found)) {
            word = found
          } else {
            word = found
          }
          parsed.push(word)
          i += testWord.length - 1
          break
        } else {
          if (!options.ignoreNotFound) {
            if (testWord.length === 1) {
              parsed.push({
                hanzi: testWord,
                pinyin: undefined,
                hsk: undefined,
                id: undefined,
                translations: []
              })
              i += testWord.length - 1
              break
            }
          }
        }
      }
    }

    return render(parsed, renderId)
  }

  return parse
}
