import { SKILL_COUNT, EMPLOYEE_COUNT } from '../constants/Contants'

const defaultCounter = {
    skillCount: 0,
    employeeCount: 0
}

export default function dashboardReducer(state = defaultCounter, action = {}) {
    switch (action.type) {
        case SKILL_COUNT: {
            return {
                ...state, 
                skillCount: action.count
            }
        }
        case EMPLOYEE_COUNT: {
            return {
                ...state, 
                employeeCount: action.count
            }
        }
        default: return state;
    }
};