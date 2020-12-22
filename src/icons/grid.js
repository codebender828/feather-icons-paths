/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feGrid', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherGridIconData */

/** @type {FeatherGridIconData} */
const feGrid = {
  prefix: 'fe',
  iconName: 'grid',
  icon: [
    24,
    24,
    '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><path d="M3 3 H10 V10 H3 V3 z"/><path d="M14 3 H21 V10 H14 V3 z"/><path d="M14 14 H21 V21 H14 V14 z"/><path d="M3 14 H10 V21 H3 V14 z"/></svg>',
    'M3 3 H10 V10 H3 V3 z M14 3 H21 V10 H14 V3 z M14 14 H21 V21 H14 V14 z M3 14 H10 V21 H3 V14 z'
  ]
}

export default feGrid
