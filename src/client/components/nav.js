import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

export default Nav