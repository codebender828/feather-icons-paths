/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feSkipForward', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherSkipForwardIconData */

/** @type {FeatherSkipForwardIconData} */
const feSkipForward = {
  prefix: 'fe',
  iconName: 'skip-forward',
  icon: [
    24,
    24,
    '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-forward"><path d="M5 4 L15 12 L5 20 L5 4 Z"/><path d="M19 5 L19 19"/></svg>',
    'M5 4 L15 12 L5 20 L5 4 Z M19 5 L19 19'
  ]
}

export default feSkipForward
