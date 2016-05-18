// ie11 support
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/root'
import configureStore from './store/configure_store'

//import here for store config when using redux
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root history={ history } store={ store }/>, document.getElementById('root')
)