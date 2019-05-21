import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchEmployees, deleteEmployee } from '../../actions/EmployeeAction'

import EmployeeList from './EmployeeList'

class EmployeePage extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  
  render() {
    return (
      <div>
        <EmployeeList employees= {this.props.employees} deleteEmployee={this.props.deleteEmployee}></EmployeeList>
        <div className="fixed-action-btn">
          <Link to="/employees/add" className="btn-floating btn -large red">
          <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

EmployeePage.propTypes = {
    employees: PropTypes.array.isRequired,
    fetchEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
      employees: state.employeeReducer
    }
}

const mapDispatchToProps = {fetchEmployees, deleteEmployee};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
