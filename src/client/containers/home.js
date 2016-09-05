import React from 'react'
import { connect } from 'react-redux'

const image = require('../images/home-hero.jpg')

import * as homeActions from '../actions/home_actions'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <img src={ image } />
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
