import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import SkillsList from './SkillsList'

class SkillsPage extends Component {
  render() {
    return (
      <div>
        <h1>Skills List</h1>
        <SkillsList skills= {this.props.skills}></SkillsList>
      </div>
    )
  }
}

SkillsPage.propTypes = {
    skills: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        skills: state.skills
    }
}

export default connect(mapStateToProps)(SkillsPage)
