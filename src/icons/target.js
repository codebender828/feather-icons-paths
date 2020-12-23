/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feTarget', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherTargetIconData */

/** @type {FeatherTargetIconData} */
const feTarget = {
  prefix: 'fe',
  iconName: 'target',
  icon: [
    24,
    24,
    '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-target"><path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z"/><path d="M18 12 A6 6 0 0 1 12 18 A6 6 0 0 1 6 12 A6 6 0 0 1 18 12 z"/><path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12 z"/></svg>',
    'M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z M18 12 A6 6 0 0 1 12 18 A6 6 0 0 1 6 12 A6 6 0 0 1 18 12 z M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12 z',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feTarget
