import React from 'react'
import PropTypes from 'prop-types';


import EmployeeItem from './EmployeeItem'

function EmployeeList({employees, deleteEmployee}) {
    const emptyMessage = (
        <p>There are no employees yet in your collection</p>
    );
    const employeeItems = employees.map((employee ,index) => {
      return (
        <EmployeeItem key={employee.id} item={employee} deleteEmployee={deleteEmployee}/>
      );
    })
    const employeesList = (
      <div>
      <h3>Employee List</h3>
      <ul className="collection">
        {employeeItems}
      </ul>
    </div>
    )
  return (
    <div>
      {
        employees.length === 0 ? 
        emptyMessage :
        employeesList
      }
    </div>
  )
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  deleteEmployee: PropTypes.func.isRequired
}

export default EmployeeList
