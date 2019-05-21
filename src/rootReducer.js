import {combineReducers} from 'redux'

import skills from './reducers/skills'
import employees from './reducers/employees'

export default combineReducers({
    skills,
    employees
})

