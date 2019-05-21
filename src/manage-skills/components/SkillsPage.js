import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSkills, deleteSkill } from '../../actions/SkillsAction'

import SkillsList from './SkillsList'

class SkillsPage extends Component {
  componentDidMount() {
    this.props.fetchSkills();
  }
  
  render() {
    return (
      <div>
        <SkillsList skills= {this.props.skills} deleteSkill={this.props.deleteSkill}></SkillsList>
        <div className="fixed-action-btn">
          <Link to="/skills/add" className="btn-floating btn -large red">
          <i className="fa fa-plus"></i>
          </Link>
        </div>
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

const mapDispatchToProps = {fetchSkills, deleteSkill};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage)
