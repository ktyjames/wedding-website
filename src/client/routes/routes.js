import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'
import App from '../containers/app'
import Index from '../containers/index'

export default function configureRouter(history){
  return(
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
      </Route>
    </Router>
  )
}