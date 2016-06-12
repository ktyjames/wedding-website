import React from 'react'
import { connect } from 'react-redux'

import * as indexActions from '../actions/index_actions'
import TestComponent from '../components/test_component'

class Index extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const { someProp } = this.props
    return(
      <div>
        <p>{ someProp }</p>
        <TestComponent text="component string"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    someProp: state.index.someProp
  }
}

export default connect(mapStateToProps, {
  indexAction: indexActions.indexAction
})(Index)
