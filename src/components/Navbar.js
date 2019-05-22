import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/AuthAction'

class Navbar extends Component {
  logout = () => {
    this.props.logout().then(
      (res) => {
      },
      (err) => console.log(err)
    );
  }
  
  render() {
    const { isLoggedIn } = this.props;
    const navbarContent = () => {
      if(isLoggedIn) {
        return (
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li onClick={this.logout}><Link to="/login">Logout</Link></li>
          </ul>
        );
      } else {
        return (
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li><Link to="/login">Login</Link></li>
          </ul>
        );
      }
    }
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React CRUD with Redux</Link>
          { navbarContent() }
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, {logout})(Navbar)