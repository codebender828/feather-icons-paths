/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feZoomOut', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherZoomOutIconData */

/** @type {FeatherZoomOutIconData} */
const feZoomOut = {
  prefix: 'fe',
  iconName: 'zoom-out',
  icon: [
    24,
    24,
    '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-out"><path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z"/><path d="M21 21 L16.65 16.65"/><path d="M8 11 L14 11"/></svg>',
    'M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z M21 21 L16.65 16.65 M8 11 L14 11',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feZoomOut
