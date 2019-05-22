import {combineReducers} from 'redux'

import authReducer from './reducers/authReducer'
import skillReducer from './reducers/skillReducer'
import employeeReducer from './reducers/employeeReducer'
import dashboardReducer from './reducers/dashboardReducer'

export default combineReducers({
    authReducer,
    skillReducer,
    employeeReducer,
    dashboardReducer
})

