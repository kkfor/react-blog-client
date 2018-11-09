require('./ignore')()
require('module-alias/register')
require('@babel/register')
require('@babel/polyfill')
require('css-modules-require-hook')({
  extensions: ['.scss'],
  preprocessCss: (data, filename) =>
      require('node-sass').renderSync({
          data,
          file: filename
      }).css,
  camelCase: true,
  generateScopedName: '[name]__[local]__[hash:base64:8]'
})
require('./app.js')