import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

import * as homeActions from '../actions/home_actions'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Nav />
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
