import React from 'react'
import { Link } from 'react-router-dom'

function SkillItem({item, deleteSkill}) {
  return (
    <li className="collection-item">
      <span>{ item.name } : {item.version}</span>
      <div className="secondary-content">
        <button><Link to={`/skills/edit/${item.id}`}><i className="fa fa-pencil right"></i>Edit</Link></button>
        <button onClick={() => deleteSkill(item.id)}><i className="fa fa-trash right"></i>Delete</button>
      </div>
    </li>
  )
}

export default SkillItem