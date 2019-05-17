import React from 'react'
import PropTypes from 'prop-types';


import SkillItem from './SkillItem'

function SkillsList({skills, deleteSkill}) {
    const emptyMessage = (
        <p>There are no skills yet in your collection</p>
    );
    const skillItems = skills.map((skill ,index) => {
      return (
        <SkillItem key={skill.id} item={skill} deleteSkill={deleteSkill}/>
      );
    })
    const skillsList = (
      <div>
      <h3>Skill List</h3>
      <ul className="collection">
        {skillItems}
      </ul>
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
    skills: PropTypes.array.isRequired,
    deleteSkill: PropTypes.func.isRequired
}

export default SkillsList
