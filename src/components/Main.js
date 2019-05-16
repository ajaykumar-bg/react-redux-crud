import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import SkillsPage from './SkillsPage'
import SkillForm from './SkillForm'


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