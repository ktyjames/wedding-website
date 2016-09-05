import React from 'react'
import { connect } from 'react-redux'

import * as homeActions from '../actions/home_actions'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <img src={ require('../images/home-hero.jpg') } />
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
