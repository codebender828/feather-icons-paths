/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feMove', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherMoveIconData */

/** @type {FeatherMoveIconData} */
const feMove = {
  prefix: 'fe',
  iconName: 'move',
  icon: [
    24,
    24,
    '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-move"><path d="M5 9 L2 12 L5 15"/><path d="M9 5 L12 2 L15 5"/><path d="M15 19 L12 22 L9 19"/><path d="M19 9 L22 12 L19 15"/><path d="M2 12 L22 12"/><path d="M12 2 L12 22"/></svg>',
    'M5 9 L2 12 L5 15 M9 5 L12 2 L15 5 M15 19 L12 22 L9 19 M19 9 L22 12 L19 15 M2 12 L22 12 M12 2 L12 22',
    '"xmlns"="http=//www.w3.org/2000/svg" "width"="24" "height"="24" "fill"="none" "stroke"="currentColor" "stroke-width"=2 "stroke-linecap"="round" "stroke-linejoin"="round"'
  ]
}

export default feMove
