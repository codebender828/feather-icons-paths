/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feServer', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherServerIconData */

/** @type {FeatherServerIconData} */
const feServer = {
  prefix: 'fe',
  iconName: 'server',
  icon: [
    24,
    24,
    '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><path d="M4 2 H20 A2 2 0 0 1 22 4 V8 A2 2 0 0 1 20 10 H4 A2 2 0 0 1 2 8 V4 A2 2 0 0 1 4 2 z"/><path d="M4 14 H20 A2 2 0 0 1 22 16 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V16 A2 2 0 0 1 4 14 z"/><path d="M6 6 L6.01 6"/><path d="M6 18 L6.01 18"/></svg>',
    'M4 2 H20 A2 2 0 0 1 22 4 V8 A2 2 0 0 1 20 10 H4 A2 2 0 0 1 2 8 V4 A2 2 0 0 1 4 2 z M4 14 H20 A2 2 0 0 1 22 16 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V16 A2 2 0 0 1 4 14 z M6 6 L6.01 6 M6 18 L6.01 18',
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

export default feServer
