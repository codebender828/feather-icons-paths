/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feSend', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherSendIconData */

/** @type {FeatherSendIconData} */
const feSend = {
  prefix: 'fe',
  iconName: 'send',
  icon: [
    24,
    24,
    '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><path d="M22 2 L11 13"/><path d="M22 2 L15 22 L11 13 L2 9 L22 2 Z"/></svg>',
    'M22 2 L11 13 M22 2 L15 22 L11 13 L2 9 L22 2 Z'
  ]
}

export default feSend
