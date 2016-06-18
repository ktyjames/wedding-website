import bodyParser from 'body-parser'
import express from 'express'
import handleRender from './routes/index'

const port = 8080

let app = express()
let server = app.listen(port, ()=> console.log(`Server is listening on port: ${server.address().port}...`))

app.use(bodyParser.json({}))

if(process.env.NODE_ENV === 'development'){
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../webpack/webpack.client.config.js')('dev')
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}))
  app.use(webpackHotMiddleware(compiler))

  //colorized requests
  const morgan = require('morgan')
  app.use(morgan('dev'))
}

//Express API Routes
app.use(express.static('./public'))
app.use(handleRender)
