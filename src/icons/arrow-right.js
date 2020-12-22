/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feArrowRight', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherArrowRightIconData */

/** @type {FeatherArrowRightIconData} */
const feArrowRight = {
  prefix: 'fe',
  iconName: 'arrow-right',
  icon: [
    24,
    24,
    '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><path d="M5 12 L19 12"/><path d="M12 5 L19 12 L12 19"/></svg>',
    'M5 12 L19 12 M12 5 L19 12 L12 19'
  ]
}

export default feArrowRight
