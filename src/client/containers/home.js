import React from 'react'
import { connect } from 'react-redux'

import * as homeActions from '../actions/home_actions'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="base">
        <img className="gsl-logo" src={require('../images/great-scott-love.png')}/>
        <nav>
          <ul>
            <li>Story</li>
            <li>Details</li>
            <li>Contact</li>
          </ul>
        </nav>
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
