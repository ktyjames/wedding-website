import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        test
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

})(Test)