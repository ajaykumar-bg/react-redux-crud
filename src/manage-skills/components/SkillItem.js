import React from 'react'
import { Link } from 'react-router-dom'

function SkillItem({item, deleteSkill}) {
  return (
    <li className="collection-item">
      <span>{ item.name } : {item.version}</span>
      <button><Link to={`/skills/edit/${item.id}`}>Edit</Link></button>
      <button onClick={() => deleteSkill(item.id)}>Delete</button>
    </li>
  )
}

export default SkillItem