/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feLayers', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherLayersIconData */

/** @type {FeatherLayersIconData} */
const feLayers = {
  prefix: 'fe',
  iconName: 'layers',
  icon: [
    24,
    24,
    '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><path d="M12 2 L2 7 L12 12 L22 7 L12 2 Z"/><path d="M2 17 L12 22 L22 17"/><path d="M2 12 L12 17 L22 12"/></svg>',
    'M12 2 L2 7 L12 12 L22 7 L12 2 Z M2 17 L12 22 L22 17 M2 12 L12 17 L22 12',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feLayers
