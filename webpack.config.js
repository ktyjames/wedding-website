'use strict'

const PACKAGE_VERSION = String(require('./package.json').version)

module.exports = [
  require('./src/webpack/webpack.client.config.js')(PACKAGE_VERSION),
  require('./src/webpack/webpack.SERVER.config.js')(PACKAGE_VERSION)
]