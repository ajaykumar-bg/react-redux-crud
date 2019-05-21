import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeItem({item, deleteEmployee}) {
  return (
    <li className="collection-item">
      <span className="title">{ item.employeeName } : {item.employeeId}</span>
      <p>{ item.designation } <br/>
        { item.emailId }
      </p>
      <div className="secondary-content">
        <button><Link to={`/employees/edit/${item.id}`}><i className="fa fa-pencil right"></i>Edit</Link></button>
        <button onClick={() => deleteEmployee(item.id)}><i className="fa fa-trash right"></i>Delete</button>
      </div>
    </li>
  )
}

export default EmployeeItem