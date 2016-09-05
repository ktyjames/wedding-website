import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

class Story extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="story">
        <Nav location="story"/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, {

})(Story)
