/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feArrowUpCircle', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherArrowUpCircleIconData */

/** @type {FeatherArrowUpCircleIconData} */
const feArrowUpCircle = {
  prefix: 'fe',
  iconName: 'arrow-up-circle',
  icon: [
    24,
    24,
    '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z"/><path d="M16 12 L12 8 L8 12"/><path d="M12 16 L12 8"/></svg>',
    'M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z M16 12 L12 8 L8 12 M12 16 L12 8',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feArrowUpCircle
