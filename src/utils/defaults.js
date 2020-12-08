/** @typedef {{ id: Number, text: String, transliteration: String, translations: String[], hsk: Number, }} KadukaduWord */
/** @typedef {{ sourceLanguage: String, targetLanguage: String, plugins?: Function[], showHSK?: Boolean, ignoreNotFound?: Boolean, renderer: RendererOptions, onProgress: (value: Number, total: Number) => null }} KadukaduOptions */
/** @typedef {{ tippy: { content: ({}) => String|HTMLElement, onShow: ({}) => void, onHide: ({}) => void, animation: Boolean } }} PopoverOptions */
/** @typedef {{ target: String, lineSpacing: Number, showPopover: Boolean, transliteration: Boolean, events: Object, render: (h: (string, {}) => HTMLElement, sentence: KadukaduWord[], id: Number) => [rendered: HTMLElement, sentence: KadukaduWord[]], popoverOptions: PopoverOptions }} RendererOptions */

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
   * Show HSK Levels
   * @type {Boolean}
   */
  showHSK: true,
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
    /**
     * @type {Boolean}
     */
    transliteration: true,
    /**
     * @type {Boolean}
     */
    showPopover: true,
    /**
     * id of the element to render nodes to
     * @type {String}
     */
    target: null,

    /**
     * @param {(string, {}) => HTMLElement} h Hyperscript function for creating DOM nodes
     * @param {KadukaduWord[]} sentence Sentence of words returned by Kadukadu parser
     * @param {Number} id Id of the sentence rendered
     */
    render: undefined,
    /**
     * Spacing between each paragraph
     * @type {Number}
     */
    lineSpacing: 5,
    /** @type {PopoverOptions} */
    popoverOptions: {
      tippy: {
        /**
       * Dangerously set the animation. Setting the animation value to true
       * will cause a delay when showing and hiding the popovers. This results in
       * overlapping onf the word popovers.
       * @type {Boolean}
       */
        animation: false
      }
    }
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
