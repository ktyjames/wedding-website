import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as indexActions from '../actions/index_actions'

class Index extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.getServerData()
    
  }
  
  handleButtonPress = () => {
    this.props.getServerData()
  }

  render(){
    return(
      <div>
        { this.props.someProp }
        <br />
        <button onClick={ this.handleButtonPress }>Press</button>
        <br />
        <Link to="/test">Link</Link>
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
  indexAction: indexActions.indexAction,
  getServerData: indexActions.getServerData
})(Index)