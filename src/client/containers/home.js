import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as homeActions from '../actions/home_actions'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="base">

      </div>
    )
  }
}


function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, {

})(Home)
