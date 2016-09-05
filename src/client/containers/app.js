import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  setBackground =()=>{
    const { routing } = this.props

    const homeBackground = `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${require('../images/home-hero.jpg')} )`
    const storyBackground = `linear-gradient(to bottom, #E4D0C9 1%, transparent 60%), url( ${require('../images/story-hero.jpg')} )`
    const detailsBackground = `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${require('../images/details-hero.jpg')} )`
    const contactBackground = `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${require('../images/contact-hero.jpg')} )`

    switch(routing.pathname) {
      case '/':
        return homeBackground

      case '/story':
        return storyBackground

      case '/details':
        return detailsBackground

      case '/contact':
        return contactBackground

      default:
        return homeBackground
    }
  }

  render(){

    const { children } = this.props

    const style = {
      base: {
        width: '100%',
        height: '100vh',
        background: this.setBackground(),
        backgroundSize: 'cover'
      }
    }

    return(
      <div style={ style.base }>
        <img className="gsl-logo" src={require('../images/great-scott-love.png')}/>
        <nav>
          <ul>
            <li>
              <Link to="/story">Story</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        { children }
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

export default connect(mapStateToProps, {

})(App)
