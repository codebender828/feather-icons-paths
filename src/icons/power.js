/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'fePower', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherPowerIconData */

/** @type {FeatherPowerIconData} */
const fePower = {
  prefix: 'fe',
  iconName: 'power',
  icon: [
    24,
    24,
    '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><path d="M12 2 L12 12"/></svg>',
    'M18.36 6.64a9 9 0 1 1-12.73 0 M12 2 L12 12'
  ]
}

export default fePower
