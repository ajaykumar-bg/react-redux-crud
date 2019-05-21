import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import SkillsPage from '../manage-skills/components/SkillsPage'
import SkillForm from '../manage-skills/components/SkillForm'


export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={SkillsPage}/>
            <Route exact path="/skills" component={SkillsPage}/>
            <Route exact path="/skills/add" component={SkillForm}/>
            <Route exact path="/skills/edit/:id" component={SkillForm}/>
        </Switch>
        
      </main>
    )
  }
}

export default Main