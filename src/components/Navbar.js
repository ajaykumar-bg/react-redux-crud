import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
  render() {
    return (
      <nav>
        <Link to="/skills"><i className="fa fa-certificate"></i>Skills</Link>
      </nav>
    )
  }
}

export default Navbar