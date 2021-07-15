/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: 'feGitBranch', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} FeatherGitBranchIconData */

/** @type {FeatherGitBranchIconData} */
const feGitBranch = {
  prefix: 'fe',
  iconName: 'git-branch',
  icon: [
    24,
    24,
    '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><path d="M6 3 L6 15"/><path d="M21 6 A3 3 0 0 1 18 9 A3 3 0 0 1 15 6 A3 3 0 0 1 21 6 z"/><path d="M9 18 A3 3 0 0 1 6 21 A3 3 0 0 1 3 18 A3 3 0 0 1 9 18 z"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    'M6 3 L6 15 M21 6 A3 3 0 0 1 18 9 A3 3 0 0 1 15 6 A3 3 0 0 1 21 6 z M9 18 A3 3 0 0 1 6 21 A3 3 0 0 1 3 18 A3 3 0 0 1 9 18 z M18 9a9 9 0 0 1-9 9',
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

export default feGitBranch
