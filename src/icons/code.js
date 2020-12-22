/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feCode', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherCodeIconData */

/** @type {FeatherCodeIconData} */
const feCode = {
  prefix: 'fe',
  iconName: 'code',
  icon: [
    24,
    24,
    '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><path d="M16 18 L22 12 L16 6"/><path d="M8 6 L2 12 L8 18"/></svg>',
    'M16 18 L22 12 L16 6 M8 6 L2 12 L8 18'
  ]
}

export default feCode
