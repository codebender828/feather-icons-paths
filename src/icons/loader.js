/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feLoader', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherLoaderIconData */

/** @type {FeatherLoaderIconData} */
const feLoader = {
  prefix: 'fe',
  iconName: 'loader',
  icon: [
    24,
    24,
    '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><path d="M12 2 L12 6"/><path d="M12 18 L12 22"/><path d="M4.93 4.93 L7.76 7.76"/><path d="M16.24 16.24 L19.07 19.07"/><path d="M2 12 L6 12"/><path d="M18 12 L22 12"/><path d="M4.93 19.07 L7.76 16.24"/><path d="M16.24 7.76 L19.07 4.93"/></svg>',
    'M12 2 L12 6 M12 18 L12 22 M4.93 4.93 L7.76 7.76 M16.24 16.24 L19.07 19.07 M2 12 L6 12 M18 12 L22 12 M4.93 19.07 L7.76 16.24 M16.24 7.76 L19.07 4.93'
  ]
}

export default feLoader
