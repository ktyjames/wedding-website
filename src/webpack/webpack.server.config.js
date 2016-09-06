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
    node: {
      __dirname: false,
      __filename: false
    },
    entry: path.join(PROJECT_ROOT, 'src/server/index.js'),
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
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [/node_modules/, './dist', './src/client'],
          query:{
            plugins: [],
            presets: ['es2015', 'stage-0', 'react']
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },
      ]
    },
    externals: nodeModules
  }

  return serverConfig
}
