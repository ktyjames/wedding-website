import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

class Contact extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="contact">
        <Nav/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, {

})(Contact)
