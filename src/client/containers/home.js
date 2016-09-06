import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="base">
        <Nav location="home"/>
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
