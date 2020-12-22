/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feShuffle', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherShuffleIconData */

/** @type {FeatherShuffleIconData} */
const feShuffle = {
  prefix: 'fe',
  iconName: 'shuffle',
  icon: [
    24,
    24,
    '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shuffle"><path d="M16 3 L21 3 L21 8"/><path d="M4 20 L21 3"/><path d="M21 16 L21 21 L16 21"/><path d="M15 15 L21 21"/><path d="M4 4 L9 9"/></svg>',
    'M16 3 L21 3 L21 8 M4 20 L21 3 M21 16 L21 21 L16 21 M15 15 L21 21 M4 4 L9 9'
  ]
}

export default feShuffle
