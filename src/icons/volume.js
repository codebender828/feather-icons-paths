/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feVolume', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherVolumeIconData */

/** @type {FeatherVolumeIconData} */
const feVolume = {
  prefix: 'fe',
  iconName: 'volume',
  icon: [
    24,
    24,
    '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume"><path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5 Z"/></svg>',
    'M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5 Z',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 24,
      height: 24,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
  ],
}

export default feVolume
