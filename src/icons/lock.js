/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feLock', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherLockIconData */

/** @type {FeatherLockIconData} */
const feLock = {
  prefix: 'fe',
  iconName: 'lock',
  icon: [
    24,
    24,
    '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><path d="M5 11 H19 A2 2 0 0 1 21 13 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V13 A2 2 0 0 1 5 11 z"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    'M5 11 H19 A2 2 0 0 1 21 13 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V13 A2 2 0 0 1 5 11 z M7 11V7a5 5 0 0 1 10 0v4'
  ]
}

export default feLock
