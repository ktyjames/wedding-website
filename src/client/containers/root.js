import React from 'react'
import { Provider } from 'react-redux'
import configureRouter from '../routes/routes'


class Root extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const { history, store } = this.props
    return(
      <div style={{ width: '100%', height: '100%'}}>
        <Provider store={ store } >
          { configureRouter(history) }
        </Provider>
      </div>
    )
  }
}

export default Root