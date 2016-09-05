import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from '../containers/app'
import Index from '../containers/index'

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Index } />
  </Route>
)

export default routes
