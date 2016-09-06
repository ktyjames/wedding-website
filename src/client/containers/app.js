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
      <div className={ `background ${ path === '/' ? 'home' : ''}`}>
        <div style={{
          //visibility: path !== '/' ? 'hidden' : null,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ homeHero } ) no-repeat`,
          backgroundSize: 'cover',
          opacity: path !== '/' ? 0 : 1,
          transition: 'all 1s ease-in'

        }}/>

        <div style={{
          //visibility: path !== '/contact' ? 'hidden' : null,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ contactHero } ) no-repeat`,
          backgroundSize: 'cover',
          opacity: path !== '/contact' ? 0 : 1,
          transition: 'all 1s ease-in'

        }}/>

        <div style={{
          //visibility: path !== '/story' ? 'hidden' : null,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ storyHero } ) no-repeat`,
          backgroundSize: 'cover',
          opacity: path !== '/story' ? 0 : 1,
          transition: 'all 1s ease-in'

        }}/>

        <div style={{
          //visibility: path !== '/details' ? 'hidden' : null,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, #856C59 1%, transparent 60%), url( ${ detailsHero } ) no-repeat`,
          backgroundSize: 'cover',
          opacity: path !== '/details' ? 0 : 1,
          transition: 'all 1s ease-in'

        }}/>
      </div>
    )

  }

  render(){

    const { children, routing } = this.props

    return(
      <div>
        <Nav location={ routing.pathname }/>
        { this.renderBackgroundDiv() }

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
