/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feAnchor', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherAnchorIconData */

/** @type {FeatherAnchorIconData} */
const feAnchor = {
  prefix: 'fe',
  iconName: 'anchor',
  icon: [
    24,
    24,
    '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-anchor"><path d="M15 5 A3 3 0 0 1 12 8 A3 3 0 0 1 9 5 A3 3 0 0 1 15 5 z"/><path d="M12 22 L12 8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>',
    'M15 5 A3 3 0 0 1 12 8 A3 3 0 0 1 9 5 A3 3 0 0 1 15 5 z M12 22 L12 8 M5 12H2a10 10 0 0 0 20 0h-3',
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

export default feAnchor
