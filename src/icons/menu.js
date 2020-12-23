/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feMenu', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherMenuIconData */

/** @type {FeatherMenuIconData} */
const feMenu = {
  prefix: 'fe',
  iconName: 'menu',
  icon: [
    24,
    24,
    '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><path d="M3 12 L21 12"/><path d="M3 6 L21 6"/><path d="M3 18 L21 18"/></svg>',
    'M3 12 L21 12 M3 6 L21 6 M3 18 L21 18',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feMenu
