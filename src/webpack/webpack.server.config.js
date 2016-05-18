'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const PROJECT_ROOT = path.resolve(__dirname, '../../')

let nodeModules = {};
try {
  let nodeModulesPath = path.join(PROJECT_ROOT, 'node_modules')
  fs.accessSync(nodeModulesPath)

  fs.readdirSync('node_modules')
    .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
      nodeModules[mod] = 'commonjs' + ' ' + mod;
    })
} catch(err) {
  throw err
}

module.exports = function(version){
  let serverConfig = {
    name: 'server',
    devtool: 'source-map',
    target: 'node',
    entry: path.join(PROJECT_ROOT, 'src/server/server.js'),
    output: {
      path: path.join(PROJECT_ROOT, 'dist'),
      filename: 'server.js'
    },
    plugins: [
      new webpack.BannerPlugin('require("source-map-support").install();',{
        raw: true,
        entryOnly: false
      }),
      new webpack.DefinePlugin({
        'process.env.PKG_VERSION': JSON.stringify(version)
      })
    ],
    externals: nodeModules
  }

  return serverConfig
}