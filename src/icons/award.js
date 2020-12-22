/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feAward', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherAwardIconData */

/** @type {FeatherAwardIconData} */
const feAward = {
  prefix: 'fe',
  iconName: 'award',
  icon: [
    24,
    24,
    '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><path d="M19 8 A7 7 0 0 1 12 15 A7 7 0 0 1 5 8 A7 7 0 0 1 19 8 z"/><path d="M8.21 13.89 L7 23 L12 20 L17 23 L15.79 13.88"/></svg>',
    'M19 8 A7 7 0 0 1 12 15 A7 7 0 0 1 5 8 A7 7 0 0 1 19 8 z M8.21 13.89 L7 23 L12 20 L17 23 L15.79 13.88'
  ]
}

export default feAward
