import React from 'react'
import { Provider } from 'react-redux'
import { IndexRoute, Route, Router } from 'react-router'
import App from './app'
import Index from './index'

class Root extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const { history, store } = this.props;
    return(
      <div style={{ width: '100%', height: '100%'}}>
        <Provider store={ store } >
          <Router history={ history }>
            <Route path="/" component={ App }>
              <IndexRoute component={ Index } />
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default Root