import React from 'react'
import { connect } from 'react-redux'


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    const { children } = this.props

    return(
      <div style={ style.base }>
        { children }
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

export default connect(mapStateToProps, {
  
})(App)