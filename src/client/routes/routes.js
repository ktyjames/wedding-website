import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from '../containers/app'
import Index from '../containers/index'
import Test from '../containers/test'
import Grid from '../containers/grid'

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Grid } />
    <Route path="/test" component={ Test } />
  </Route>
)

export default routes
