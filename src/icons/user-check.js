/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feUserCheck', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherUserCheckIconData */

/** @type {FeatherUserCheckIconData} */
const feUserCheck = {
  prefix: 'fe',
  iconName: 'user-check',
  icon: [
    24,
    24,
    '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M12.5 7 A4 4 0 0 1 8.5 11 A4 4 0 0 1 4.5 7 A4 4 0 0 1 12.5 7 z"/><path d="M17 11 L19 13 L23 9"/></svg>',
    'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M12.5 7 A4 4 0 0 1 8.5 11 A4 4 0 0 1 4.5 7 A4 4 0 0 1 12.5 7 z M17 11 L19 13 L23 9',
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

export default feUserCheck
