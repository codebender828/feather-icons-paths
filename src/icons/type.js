/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feType', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherTypeIconData */

/** @type {FeatherTypeIconData} */
const feType = {
  prefix: 'fe',
  iconName: 'type',
  icon: [
    24,
    24,
    '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type"><path d="M4 7 L4 4 L20 4 L20 7"/><path d="M9 20 L15 20"/><path d="M12 4 L12 20"/></svg>',
    'M4 7 L4 4 L20 4 L20 7 M9 20 L15 20 M12 4 L12 20'
  ]
}

export default feType
