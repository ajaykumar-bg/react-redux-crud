import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import SkillsPage from './SkillsPage'


export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={SkillsPage}/>
            <Route exact path="/skills" component={SkillsPage}/>
        </Switch>
        
      </main>
    )
  }
}

export default Main