/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feSkipBack', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherSkipBackIconData */

/** @type {FeatherSkipBackIconData} */
const feSkipBack = {
  prefix: 'fe',
  iconName: 'skip-back',
  icon: [
    24,
    24,
    '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-back"><path d="M19 20 L9 12 L19 4 L19 20 Z"/><path d="M5 19 L5 5"/></svg>',
    'M19 20 L9 12 L19 4 L19 20 Z M5 19 L5 5'
  ]
}

export default feSkipBack
