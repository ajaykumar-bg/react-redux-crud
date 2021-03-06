import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import ReduxFormExample from './ReduxFormExample'

import Register from './Register'
import Login from './Login'

import Dashboard from './Dashboard'
import SkillsPage from '../manage-skills/components/SkillsPage'
import SkillForm from '../manage-skills/components/SkillForm'

import EmployeePage from '../manage-employees/components/EmployeePage'
import EmployeeForm from '../manage-employees/components/EmployeeForm'


export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={ReduxFormExample}/>

            <Route exact path="/redux-form-example" component={ReduxFormExample}/>

            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>

            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/skills" component={SkillsPage}/>
            <Route exact path="/skills/add" component={SkillForm}/>
            <Route exact path="/skills/edit/:id" component={SkillForm}/>

            <Route exact path="/employees" component={EmployeePage}/>
            <Route exact path="/employees/add" component={EmployeeForm}/>
            <Route exact path="/employees/edit/:id" component={EmployeeForm}/>
        </Switch>
        
      </main>
    )
  }
}

export default Main