/** Kadukadu default options */
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
   * Should render pinyin
   * @type {Boolean}
   */
  pinyin: true
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

// TODO: Use dictionary import paths
export const DICTIONARY_IMPORT_MAPS = {
  'zh-en': '@akkadu/kadukadu-dictionary'
}
