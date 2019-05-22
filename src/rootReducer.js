import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './reducers/authReducer'
import skillReducer from './reducers/skillReducer'
import employeeReducer from './reducers/employeeReducer'
import dashboardReducer from './reducers/dashboardReducer'

export default combineReducers({
    authReducer,
    skillReducer,
    employeeReducer,
    dashboardReducer,
    form: formReducer
})

