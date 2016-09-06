import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

const homeHero = require('../images/home-hero.jpg')
const storyHero = require('../images/story-hero.jpg')
const contactHero = require('../images/contact-hero.jpg')
const detailsHero = require('../images/details-hero.jpg')


class App extends React.Component {
  constructor(props){
    super(props)
  }

  renderBackgroundDiv =()=>{
    let path = this.props.routing.pathname

    return(
      <div className="background" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      }}>
        <div style={{
          display: path !== '/' ? 'none' : null,
          width: '100%',
          height: '100vh',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ homeHero } ) no-repeat`,
          backgroundSize: 'cover',

        }}/>

        <div style={{
          display: path !== '/contact' ? 'none' : null,
          width: '100%',
          height: '100vh',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ contactHero } ) no-repeat`,
          backgroundSize: 'cover',

        }}/>

        <div style={{
          display: path !== '/story' ? 'none' : null,
          width: '100%',
          height: '100vh',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ storyHero } ) no-repeat`,
          backgroundSize: 'cover',

        }}/>

        <div style={{
          display: path !== '/details' ? 'none' : null,
          width: '100%',
          height: '100vh',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ detailsHero} ) no-repeat`,
          backgroundSize: 'cover',

        }}/>
      </div>
    )

  }

  render(){

    const { children, routing } = this.props

    return(
      <div>
        { this.renderBackgroundDiv() }
        <Nav location={ routing.pathname }/>
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
