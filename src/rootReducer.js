import {combineReducers} from 'redux'

import skills from './reducers/skills'
import employees from './reducers/employees'
import dashboard from './reducers/dashboard'

export default combineReducers({
    skills,
    employees,
    dashboard
})

