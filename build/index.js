const path = require('path')
const feather = require('feather-icons')
const { paramCase, camelCase, pascalCase } = require('change-case')
const { pathThatSvg } = require('path-that-svg')
const { parse } = require('html-parse-stringify')
const fs = require('fs-extra')

const icons = Object.values(feather.icons).map(async (icon) => {
  const pathified = await pathThatSvg(icon.toSvg())
  const [ast] = parse(pathified)
  const paths = ast.children.filter(child => child.name === 'path')

  const normalizedPath = paths.reduce((acc, curr) => {
    const result = acc + ' ' + curr.attrs.d
    return result
  }, '')

  const exportName = `${camelCase(`fe-${icon.name}`)}`
  const typeName = pascalCase(`feather-${icon.name}-icon-data`)
  const { class: _class, viewBox, ...attrs } = icon.attrs

  const _attrs = JSON.stringify(attrs)
    .replace(/\{|\}/g, '')
    .replace(/:/g, '=')
    .replace(/\\'/g, '"')
    .replace(/24/g, '"24"')
    .replace(/,/g, ' ')

  const result = `/** @typedef {String} PathifiedSvgContent */
/** @typedef {String} FeatherIconsPathDefinition */
/** @typedef {{ prefix: 'fe', iconName: '${exportName}', icon: [Number|String, Number|String, import('feather-icons').FeatherAttributes, PathifiedSvgContent, FeatherIconsPathDefinition] }} ${typeName} */

/** @type {${typeName}} */
const ${exportName} = {
  prefix: 'fe',
  iconName: '${paramCase(icon.name)}',
  icon: [
    ${ast.attrs.width || 24},
    ${ast.attrs.height || 24},
    '${icon.contents}',
    '${pathified}',
    '${normalizedPath.trim()}',
    '${_attrs}'
  ]
}

export default ${exportName}
`

  return {
    name: icon.name,
    content: result
  }
})

Promise.all(icons).then((icons) => {
  icons.forEach(icon => {
    const component = icon.content
    const filepath = `./src/icons/${icon.name}.js`
    return fs.ensureDir(path.dirname(filepath))
      .then(() => fs.writeFile(filepath, component, 'utf8'))
  })
  const main = icons
    .map(icon => `export { default as ${camelCase(`fe-${icon.name}`)} } from './icons/${icon.name}'`)
    .join('\n\n')
  return fs.outputFile('./src/index.js', main, 'utf8')
})
