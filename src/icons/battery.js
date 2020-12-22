/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feBattery', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherBatteryIconData */

/** @type {FeatherBatteryIconData} */
const feBattery = {
  prefix: 'fe',
  iconName: 'battery',
  icon: [
    24,
    24,
    '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-battery"><path d="M3 6 H17 A2 2 0 0 1 19 8 V16 A2 2 0 0 1 17 18 H3 A2 2 0 0 1 1 16 V8 A2 2 0 0 1 3 6 z"/><path d="M23 13 L23 11"/></svg>',
    'M3 6 H17 A2 2 0 0 1 19 8 V16 A2 2 0 0 1 17 18 H3 A2 2 0 0 1 1 16 V8 A2 2 0 0 1 3 6 z M23 13 L23 11'
  ]
}

export default feBattery
