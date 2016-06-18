import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    const { children } = this.props
    

    return(
      <div>
        <div>
          <Link to="/">Index</Link>
          <br />
          <Link to="/test">Test</Link>
        </div>
        
        { this.props.children }
        
        {/*<div className="flipper">
            <ReactCSSTransitionGroup
              component="div"
              transitionName="flip"
              transitionAppear={ true }
              transitionAppearTimeout={1000}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {React.cloneElement(children, {
                key: location.pathname
              })}
            </ReactCSSTransitionGroup>
            
          </div>
         */}
        </div>
     
    )
  }
}


function mapStateToProps(state){
  return {
    
  }
}

export default connect(mapStateToProps, {
  
})(App)