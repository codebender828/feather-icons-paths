/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feActivity', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherActivityIconData */

/** @type {FeatherActivityIconData} */
const feActivity = {
  prefix: 'fe',
  iconName: 'activity',
  icon: [
    24,
    24,
    '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M22 12 L18 12 L15 21 L9 3 L6 12 L2 12"/></svg>',
    'M22 12 L18 12 L15 21 L9 3 L6 12 L2 12'
  ]
}

export default feActivity
