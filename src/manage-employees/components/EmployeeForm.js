import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import {saveEmployee, fetchEmployee, updateEmployee} from '../../actions/EmployeeAction'

class EmployeeForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: this.props.employee ? this.props.employee.id : null,
        employeeName: this.props.employee ? this.props.employee.employeeName : '',
        employeeId: this.props.employee ? this.props.employee.employeeId : '',
        designation: this.props.employee ? this.props.employee.designation : '',
        emailId: this.props.employee ? this.props.employee.emailId : ''
      }
    }

    addEmployee(newEmployee) {
        this.props.saveEmployee(newEmployee)
        .then(resp => {
            this.props.history.push('/employees');
        },
            (err) => err.response.json().then(({errors}) => console.log(errors))
        );
    }

    updateEmployee(newEmployee) {
      this.props.updateEmployee(newEmployee)
      .then(resp => {
          this.props.history.push('/employees');
      },
          (err) => err.response.json().then(({errors}) => console.log(errors))
      );
  }

    onSubmit = (event) => {
        event.preventDefault();
        const newEmployee = this.state;
        if(newEmployee.id) {
          this.updateEmployee(newEmployee);
        } else {
          this.addEmployee(newEmployee);
        }
    }

    handleChange = (event) => {
      this.setState({[event.target.name] : event.target.value})
    }

    componentWillReceiveProps = (nextProps) => {
      this.setState({
        id: nextProps.employee.id,
        employeeName: nextProps.employee.employeeName,
        employeeId: nextProps.employee.employeeId,
        designation: nextProps.employee.designation,
        emailId: nextProps.employee.emailId
      });
    }

    componentDidMount = () => {
      if(this.props.match.params.id) {
        this.props.fetchEmployee(this.props.match.params.id)
      }
      
    }
    
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/employees">Back</Link>
        <h3>Employee Form</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="employeeName" value={this.state.employeeName} onChange={this.handleChange}></input>
            <label htmlFor="employeeName">Employee Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="employeeId" value={this.state.employeeId} onChange={this.handleChange}></input>
            <label htmlFor="employeeId">Employee Id</label>
          </div>

          <div className="input-field">
            <input type="text" name="designation" value={this.state.designation} onChange={this.handleChange}></input>
            <label htmlFor="designation">Designation</label>
          </div>
          <div className="input-field">
            <input type="text" name="emailId" value={this.state.emailId} onChange={this.handleChange}></input>
            <label htmlFor="emailId">Email Id</label>
          </div>

          <button className="btn" type="submit">Save</button>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  if(props.match.params.id) {
    return {
      employee: state.employeeReducer.find(item => item.id == props.match.params.id)
    }
  }
  return { employee: null };
}

export default connect(mapStateToProps, {saveEmployee, fetchEmployee, updateEmployee})(EmployeeForm)