import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import SkillItem from './SkillItem'

function SkillsList({skills}) {
    const emptyMessage = (
        <p>There are no skills yet in your collection</p>
    );
    const skillItems = skills.map((skill ,index) => {
      return (
        <SkillItem key={skill.id} item={skill}/>
      );
    })
    const skillsList = (
      <div>
      <h3>Skill List</h3>
      <ul className="collection">
        {skillItems}
      </ul>
      <div className="fixed-action-btn">
        <Link to="/skills/add" className="btn-floating btn -large red">
        <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
    )
  return (
    <div>
      {
        skills.length === 0 ? 
        emptyMessage :
        skillsList
      }
    </div>
  )
}

SkillsList.propTypes = {
    skills: PropTypes.array.isRequired
}

export default SkillsList
