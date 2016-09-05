import React from 'react'
import { connect } from 'react-redux'

class Details extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="details">
        details
      </div>
    )
  }
}


function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, {

})(Details)
