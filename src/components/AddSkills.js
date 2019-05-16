import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddSkill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        version: ''
      }
    }

    componentWillMount() {
    }

    addSkill(newSkill) {
        console.log(newSkill)
        // this.props.saveSkill(newSkill);
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newSkill = this.state;
        this.addSkill(newSkill);
    }
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/skills">Back</Link>
        <h3>Add Skill</h3>
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

export default AddSkill