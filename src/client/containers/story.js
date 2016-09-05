import React from 'react'
import { connect } from 'react-redux'

class Story extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="story">
        story
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
