const path = require('path');

module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('./config/webpack.config.dev'),
  require: [
    path.join(__dirname, './src/app.css')
  ],
  theme: {
    fontSize: {
      base: 14,
      text: 14,
      small: 12,
      h1: 36,
      h2: 28,
      h3: 22,
      h4: 18,
      h5: 16,
      h6: 14,
    },
    color: {
      base: '#333',
      light: '#767676',
      lightest: '#ccc',
      link: '#78dce8',
      linkHover: '#f28a25',
      border: '#e8e8e8',
      name: '#7f9a44',
      type: '#b77daa',
      error: '#ff6188',
      baseBackground: '#fff',
      codeBackground: '#2c292d',
      sidebarBackground: '#2c292d',
      ribbonBackground: '#f9970d',
      ribbonText: '#fff',
    }
  },
  styleguideDir: 'docs'
}
