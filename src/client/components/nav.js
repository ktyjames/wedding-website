import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {

  static propTypes = {
    location: PropTypes.string
  }
  render(){
    const { location } = this.props
    return(
      <div>
        <img className="gsl-logo" src={require('../images/great-scott-love.png')}/>
        <nav>
          <ul>
            <li className={ location === 'story' ? 'active' : null }>
              <Link to="/story">Story</Link>
            </li>
            <li className={ location === 'details' ? 'active' : null }>
              <Link to="/details">Details</Link>
            </li>
            <li className={ location === 'contact' ? 'active' : null }>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav