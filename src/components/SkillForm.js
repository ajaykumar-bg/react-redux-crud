import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import {saveSkill, fetchSkill, updateSkill} from '../actions/SkillsAction'

class SkillForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: this.props.skill ? this.props.skill.id : null,
        name: this.props.skill ? this.props.skill.name : '',
        version: this.props.skill ? this.props.skill.version : ''
      }
    }

    addSkill(newSkill) {
        this.props.saveSkill(newSkill)
        .then(resp => {
            this.props.history.push('/skills');
        },
            (err) => err.response.json().then(({errors}) => console.log(errors))
        );
    }

    updateSkill(newSkill) {
      this.props.updateSkill(newSkill)
      .then(resp => {
          this.props.history.push('/skills');
      },
          (err) => err.response.json().then(({errors}) => console.log(errors))
      );
  }

    onSubmit = (event) => {
        event.preventDefault();
        const newSkill = this.state;
        if(newSkill.id) {
          this.updateSkill(newSkill);
        } else {
          this.addSkill(newSkill);
        }
    }

    handleChange = (event) => {
      this.setState({[event.target.name] : event.target.value})
    }

    componentWillReceiveProps = (nextProps) => {
      this.setState({
        id: nextProps.skill.id,
        name: nextProps.skill.name,
        version: nextProps.skill.version
      });
    }

    componentDidMount = () => {
      if(this.props.match.params.id) {
        this.props.fetchSkill(this.props.match.params.id)
      }
      
    }
    
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/skills">Back</Link>
        <h3>Skill Form</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
            <label htmlFor="name">Skill Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="version" value={this.state.version} onChange={this.handleChange}></input>
            <label htmlFor="version">Version</label>
          </div>
          <button className="btn" type="submit">Save</button>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  if(props.match.params.id) {
    return {
      skill: state.skills.find(item => item.id == props.match.params.id)
    }
  }
  return { skill: null };
}

export default connect(mapStateToProps, {saveSkill, fetchSkill, updateSkill})(SkillForm)