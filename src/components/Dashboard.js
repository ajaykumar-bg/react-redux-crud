import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSkillCount } from '../actions/SkillsAction'
import { fetchEmployeeCount } from '../actions/EmployeeAction'

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchSkillCount();
        this.props.fetchEmployeeCount();
    }
  render() {
    const { skillCount, employeeCount } = this.props;
    return (
      <div>
        <h3>Dashboard</h3>
          <div className="collection">
            <Link to="/skills" className="collection-item">
              <span className="badge">{skillCount}</span>Skills Added
            </Link>
            <Link to="/employees" className="collection-item">
              <span className="badge">{employeeCount}</span>Employees
            </Link>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        skillCount: state.dashboardReducer.skillCount,
        employeeCount: state.dashboardReducer.employeeCount,
    }
}

const mapDispatchToProps = {fetchSkillCount, fetchEmployeeCount};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
