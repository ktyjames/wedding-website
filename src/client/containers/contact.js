import React from 'react'
import { connect } from 'react-redux'

class Contact extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        contact
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
