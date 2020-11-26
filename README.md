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
    pinyin: true, // determines whether to render pinyin nodes
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
     * @type {Boolean}
     */
    pinyin: true,
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


- [x] Parse sentence to {Array} word objects with meaning + pinyin
  - [x] If no pinyin is provided we pish an empty node
- [x] Render and append nodes to target
- [x] Handle pinyin
- [x] Handle Popover listeners