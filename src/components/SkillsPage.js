import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchSkills, deleteSkill } from '../actions/SkillsAction'

import SkillsList from './SkillsList'

class SkillsPage extends Component {
  componentDidMount() {
    this.props.fetchSkills();
  }
  
  render() {
    return (
      <div>
        <SkillsList skills= {this.props.skills} deleteSkill={this.props.deleteSkill}></SkillsList>
      </div>
    )
  }
}

SkillsPage.propTypes = {
    skills: PropTypes.array.isRequired,
    fetchSkills: PropTypes.func.isRequired,
    deleteSkill: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        skills: state.skills
    }
}

export default connect(mapStateToProps, {fetchSkills, deleteSkill})(SkillsPage)
