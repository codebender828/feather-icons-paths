# 🥮 Kadukadu
Akkadu's popover dictionary for language learning

## Installation
```
yarn add @akkadu/kadukadu
```

## Usage
```js
import { createKadukadu } from '@akkadu/kadukadu'

const { init } = createKadukadu({
  sourceLanguage: 'zh',
  targetLanguage: 'en',
  renderer: {
    target: 'target', // id of element to print text
    transliteration: true, // determines whether to render transliteration (pinyin) nodes
  }
})

// After initialization we append elements to DOM by calling the returned render function.
const render = await init()

// Appends nodes to the target with translation and popover listeners
render('之前有很多人问学好前端需要学习哪些 js 库, 主流框架应该学 vue 还是 react ? 针对这些问题, 笔者来说说自己的看法和学习总结.')
```

### `createKadukadu` Options
For the full API see [defaults.js](https://github.com/Akkadu/kadukadu/blob/main/src/utils/defaults.js)

```js
{
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
     * Standard name for pinyin
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
     * Spacing between each paragraph
     * @type {Number}
     */
    lineSpacing: 5,
    /** @type {PopoverOptions} */
    popoverOptions: {}
  }
}
```
### Overriding the rendering scheme
If you need an escape hatch for rendering each word in a sentence, you can over-ride the rendering scheme of Kadukadu depending on how you wish to manage the rendering of each word in Kadukadu. Using the `options.renderer.render` function. This function parameter and return types are as follows: The frst argument `h` is `hyperscript`'s `document.createElement`. You can also ignore it and instead call `document.createElement` for yourself.

`(h: (string, {}) => HTMLElement, sentence: KadukaduWord[], id: Number) => [rendered: HTMLElement, sentence: KadukaduWord[]]`.
```js
import { createKadukadu } from '@akkadu/kadukadu'

const { init } = createKadukadu({
  // ...
  renderer: {
    target: 'target', // id of element to print text
    render(h, sentence, i) {
      return h('p', {
        'data-custom-sentence-id': id
        // Here we map each word in the sentence and place inside a span
      }, sentence.map(word => h('span', {
        'data-word': JSON.stringify(word),
        'data-kk-word': ''
      }, word.text)))
    }
  }
})
```
> ⚠️ Warning: Using the `render` option, will completely override the default popover settings for the rendered sentence and make them unavailable. To re-enable popovers, you need to configure the `options.renderer.popoverOptions.tippy` property yourself. See the `tippy` options from `tippy.js` here: https://atomiks.github.io/tippyjs/v6/all-props/

## Development
Project setup
### Install all dependencies
```bash
yarn install
```
### Development build
```bash
yarn dev
```
### Development UI playground
```bash
yarn playground
```
### Production build
```bash
yarn build
```


- [x] Parse sentence to {Array} word objects with meaning + transliteration
  - [x] If no transliteration is provided we pish an empty node
- [x] Render and append nodes to target
- [x] Handle transliteration
- [x] Handle Popover listeners