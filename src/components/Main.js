import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Skills from './Skills'


export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Skills}/>
            <Route exact path="/skills" component={Skills}/>
        </Switch>
        
      </main>
    )
  }
}

export default Main