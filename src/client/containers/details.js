import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

class Details extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="details">
          <Nav location="details"/>
        </div>
        <div className="kraft-section">
          <div className="callout">
            <h2>we are so honored that you are able to join us on our special day!</h2>
          </div>
        </div>
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
