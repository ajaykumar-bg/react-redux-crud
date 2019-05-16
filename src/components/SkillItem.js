import React from 'react'
import { Link } from 'react-router-dom'

function SkillItem(props) {
  const { id, name, version} = props.item;
  return (
    <li className="collection-item">
      <span>{ name } : {version}</span>
      <button><Link to={`/skills/${id}`}>Details</Link></button>
      <button><Link to={`/skills/edit/${id}`}>Edit</Link></button>
      <button>Delete</button>
    </li>
  )
}

export default SkillItem