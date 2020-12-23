/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'fePrinter', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherPrinterIconData */

/** @type {FeatherPrinterIconData} */
const fePrinter = {
  prefix: 'fe',
  iconName: 'printer',
  icon: [
    24,
    24,
    '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-printer"><path d="M6 9 L6 2 L18 2 L18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14 H18 V22 H6 V14 z"/></svg>',
    'M6 9 L6 2 L18 2 L18 9 M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2 M6 14 H18 V22 H6 V14 z',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default fePrinter
