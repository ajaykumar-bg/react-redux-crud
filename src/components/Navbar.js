import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React CRUD with Redux</Link>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/employees">Employees</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar