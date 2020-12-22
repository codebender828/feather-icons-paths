/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feArrowUp', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherArrowUpIconData */

/** @type {FeatherArrowUpIconData} */
const feArrowUp = {
  prefix: 'fe',
  iconName: 'arrow-up',
  icon: [
    24,
    24,
    '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><path d="M12 19 L12 5"/><path d="M5 12 L12 5 L19 12"/></svg>',
    'M12 19 L12 5 M5 12 L12 5 L19 12'
  ]
}

export default feArrowUp
