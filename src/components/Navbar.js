import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <Link to="/skills"><i className="fa fa-certificate"></i>Skills</Link>
      </div>
    )
  }
}

export default Navbar