/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feX', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherXIconData */

/** @type {FeatherXIconData} */
const feX = {
  prefix: 'fe',
  iconName: 'x',
  icon: [
    24,
    24,
    '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 L6 18"/><path d="M6 6 L18 18"/></svg>',
    'M18 6 L6 18 M6 6 L18 18'
  ]
}

export default feX
