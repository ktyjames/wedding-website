import React, { PropTypes } from 'react'

class TestComponent extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    text: 'test'
  }
  
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div>{ this.props.text }</div>
    )
  }
}

export default TestComponent
