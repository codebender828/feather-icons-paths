/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'fePause', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherPauseIconData */

/** @type {FeatherPauseIconData} */
const fePause = {
  prefix: 'fe',
  iconName: 'pause',
  icon: [
    24,
    24,
    '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause"><path d="M6 4 H10 V20 H6 V4 z"/><path d="M14 4 H18 V20 H14 V4 z"/></svg>',
    'M6 4 H10 V20 H6 V4 z M14 4 H18 V20 H14 V4 z'
  ]
}

export default fePause
