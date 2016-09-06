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
            <li>
              <Link className={ location === 'story' ? 'active' : null } to="/story">Story</Link>
            </li>
            <li>
              <Link className={ location === 'details' ? 'active' : null }to="/details">Details</Link>
            </li>
            <li>
              <Link className={ location === 'contact' ? 'active' : null } to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav