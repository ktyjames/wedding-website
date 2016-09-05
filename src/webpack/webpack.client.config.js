'use strict'

const path = require('path')
const webpack = require('webpack')

const PROJECT_ROOT = path.resolve(__dirname, '../../')

module.exports = function(version){
  let clientConfig = {
    name: `client.${ version }`,
    devtool: 'cheap-module-eval-source-map',
    entry: {
      client: []
    },
    output:{
      path: path.join(PROJECT_ROOT, 'dist/public'),
      filename: `client-${ version }.js`,
      publicPath: ''
    },
    plugins: [
      
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [/node_modules/, './dist', './src/server'],
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
        
        {
          test: /\.css/,
          loader: 'style!css'
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=100000&mimetype=application/font-woff'
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=100000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=100000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=100000&mimetype=application/vnd.ms-fontobject'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=100000&mimetype=image/svg+xml'
        },
        {
          test: /\.(ico)$/,
          loader: "static-loader"
        }
      ]
    }
  }

  if(process.env.NODE_ENV === 'development'){
    clientConfig.plugins.push(
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.PKG_VERSION': JSON.stringify('dev')
      })
    )

    // webpack hot middleware
    clientConfig.entry.client.push(
      'eventsource-polyfill',
      'babel-polyfill',
      'webpack-hot-middleware/client?reload=true',
      
      
      path.join(PROJECT_ROOT, 'src/client/client.js')
    )

    //hot module replacement preset --- Warning! Doesn't work well with dev client side rendering
    //clientConfig.module.loaders[0].query.presets.push('react-hmre')
  }

  if(process.env.NODE_ENV === 'production'){
    clientConfig.devtool = 'source-map'
    clientConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.PKG_VERSION': JSON.stringify(version)
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/),
      new webpack.optimize.CommonsChunkPlugin("vendor", `vendor.bundle-${ version }.js`),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: true
      })
    )
    clientConfig.entry.vendor = [
      
      'babel-polyfill',
      'lodash',
      'radium',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'isomorphic-fetch'
    ]
    clientConfig.entry.client.push(
      'babel-polyfill',
      path.join(PROJECT_ROOT, 'src/client/client.js')
    )
  }

  return clientConfig
}
