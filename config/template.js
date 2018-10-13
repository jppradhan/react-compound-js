const { getProps } = require('@svgr/core')

const reactDomTemplate = (code, config, state) => {
  const props = getProps(config)
  let result = `import * as React from 'react'\n\n`
  result += `const ${state.componentName} = (${props}: any) => ${code}\n\n`
  result += `export default ${state.componentName}`
  return result
}

module.exports = reactDomTemplate;