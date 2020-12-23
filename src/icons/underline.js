/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feUnderline', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherUnderlineIconData */

/** @type {FeatherUnderlineIconData} */
const feUnderline = {
  prefix: 'fe',
  iconName: 'underline',
  icon: [
    24,
    24,
    '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-underline"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><path d="M4 21 L20 21"/></svg>',
    'M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3 M4 21 L20 21',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feUnderline
