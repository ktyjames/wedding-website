// ie11 support
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes/routes'
import configureStore from './store/configure_store'

import './style.css'

//copies favicon
require("static?!./images/favicon.ico?output=./favicon.ico");

//import here for store config when using redux
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store } >
    <Router history={ history } routes={ routes }/>
  </Provider>, document.getElementById('root')
)
