import React from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Index extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let style = {
      base: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300, 
        height: 300, 
        backgroundColor: 'blue',
        color: 'white',
        border: '1px solid black'
      }
    }
      return(
        
      

    <div className="flipper">
      {/*<div style={ style.base }>
       <div>SIDE 1</div>
       </div>
       */}
      <ReactCSSTransitionGroup
        transitionName="flip"
        transitionAppear={ true }
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div style={ style.base }>
          <div>SIDE 1</div>
        </div>
        
      </ReactCSSTransitionGroup>
    </div>
      
    )
  }
}

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, {

})(Index)
