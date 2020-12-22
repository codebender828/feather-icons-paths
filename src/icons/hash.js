/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feHash', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherHashIconData */

/** @type {FeatherHashIconData} */
const feHash = {
  prefix: 'fe',
  iconName: 'hash',
  icon: [
    24,
    24,
    '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><path d="M4 9 L20 9"/><path d="M4 15 L20 15"/><path d="M10 3 L8 21"/><path d="M16 3 L14 21"/></svg>',
    'M4 9 L20 9 M4 15 L20 15 M10 3 L8 21 M16 3 L14 21'
  ]
}

export default feHash
