import {combineReducers} from 'redux'

import skillReducer from './reducers/skillReducer'
import employeeReducer from './reducers/employeeReducer'
import dashboardReducer from './reducers/dashboardReducer'

export default combineReducers({
    skillReducer,
    employeeReducer,
    dashboardReducer
})

