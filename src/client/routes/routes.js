import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from '../containers/app'
import Home from '../containers/home'
import Details from '../containers/details'
import Contact from '../containers/contact'
import Story from '../containers/story'

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="details" component={ Details } />
    <Route path="contact" component={ Contact } />
    <Route path="story" component={ Story } />
  </Route>
)

export default routes
