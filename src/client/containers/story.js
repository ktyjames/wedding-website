import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

class Story extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="story">
          <Nav location="story"/>
        </div>
        <div className="kraft-section">
          <div className="vertical-align-wrap">
            <div className="vertical-align vertical-align--middle">
              <h2>it was 2010 when phil & katy first met through mutual friends - but their love affair didn’t truly begin until the summer of 2012. </h2>
            </div>
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

})(Story)
