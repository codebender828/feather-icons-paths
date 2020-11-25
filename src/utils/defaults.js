/** @typedef {{sourceLanguage: String, targetLanguage: String, plugins?: Function[], showPopoverTranslations?: Boolean, showHSK?: Boolean, pinyin?: Boolean, ignoreNotFound?: Boolean, renderer: RendererOptions }} KadukaduOptions */
/** @typedef {target: String, lineSpacing: Number }} RendererOptions */

/**
 * Kadukadu default options
 * @type {KadukaduOptions}
*/
export const KADUKADU_DEFAULT_OPTIONS = {
  /**
   * Producer language
   *  @type {String}
   * */
  sourceLanguage: 'zh',
  /**
   * Consumer language
   * @type {String}
   * */
  targetLanguage: 'en',
  /**
   * Plugins are used to modify the behaviour of the sentence parser.
   * By default, the Chinese - English plugin is installed
   * @type {Array<Function>}
   * */
  plugins: [],
  /**
   * Show popover translations
   * @type {Boolean}
   */
  showPopoverTranslations: true,
  /**
   * Show HSK Levels
   * @type {Boolean}
   */
  showHSK: true,
  /**
   * Should render pinyin
   * @type {Boolean}
   */
  pinyin: true,
  /**
   * Should ignore words that are not found in the parser
   * @type {Boolean}
   */
  ignoreNotFound: false,
  /**
   * Options for renderer
   * @type {RendererOptions}
   */
  renderer: {
    target: null,
    lineSpacing: 5
  }
}

/** Parsing hooks and events */
export const HOOKS = {
  /**
   * Called before a new sentence is parsed
   * @type {Array<Function>}
   */
  onBeforeSentenceParse: [],
  /**
   * Called after a sentence is parsed
   * @type {Array<Function>}
   */
  onSentenceParsed: [],
  /**
   * Called before a new word is translated
   * @type {Array<Function>}
   */
  onBeforeWordParse: [],
  /**
   * Called before a new word is parsed
   * @type {Array<Function>}
   */
  onWordParsed: [],
  /**
   * Called before parser is initiailized
   * @type {Array<Function>}
   */
  onParserInitialized: [],
  /**
   * Called after parser is initilized
   * @type {Array<Function>}
   */
  onParserDestroyed: []
}

/**
 * Renderer default options
 */
export const RENDERER_DEFAULT_OPTIONS = {}

// TODO: Use dictionary import paths
export const DICTIONARY_IMPORT_MAPS = {
  'zh-en': '@akkadu/kadukadu-dictionary'
}
