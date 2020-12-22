/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feMap', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherMapIconData */

/** @type {FeatherMapIconData} */
const feMap = {
  prefix: 'fe',
  iconName: 'map',
  icon: [
    24,
    24,
    '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><path d="M1 6 L1 22 L8 18 L16 22 L23 18 L23 2 L16 6 L8 2 L1 6 Z"/><path d="M8 2 L8 18"/><path d="M16 6 L16 22"/></svg>',
    'M1 6 L1 22 L8 18 L16 22 L23 18 L23 2 L16 6 L8 2 L1 6 Z M8 2 L8 18 M16 6 L16 22'
  ]
}

export default feMap
