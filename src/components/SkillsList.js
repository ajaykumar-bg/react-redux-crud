import React from 'react'
import PropTypes from 'prop-types';

function SkillsList({skills}) {
    const emptyMessage = (
        <p>There are no skills yet in your collection</p>
    );
    const skillsList = (
        <p>Skills List</p>
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
