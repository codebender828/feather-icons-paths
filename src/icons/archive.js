/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feArchive', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherArchiveIconData */

/** @type {FeatherArchiveIconData} */
const feArchive = {
  prefix: 'fe',
  iconName: 'archive',
  icon: [
    24,
    24,
    '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><path d="M21 8 L21 21 L3 21 L3 8"/><path d="M1 3 H23 V8 H1 V3 z"/><path d="M10 12 L14 12"/></svg>',
    'M21 8 L21 21 L3 21 L3 8 M1 3 H23 V8 H1 V3 z M10 12 L14 12',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feArchive
