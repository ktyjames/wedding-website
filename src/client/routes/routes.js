import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from '../containers/app'
import Index from '../containers/index'
import Test from '../containers/test'

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Index } />
    <Route path="/test" component={ Test }/>
  </Route>
)

export default routes 