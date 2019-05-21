import { SET_EMPLOYEES, ADD_EMPLOYEE, EMPLOYEE_FETCHED, EMPLOYEE_UPDATED, EMPLOYEE_DELETED } from '../constants/Contants'

export default function employees(state = [], action = {}) {
    switch (action.type) {
        case SET_EMPLOYEES: {
            return action.employees;
        }
        case EMPLOYEE_FETCHED: {
            const index = state.findIndex(item => item.id == action.employee.id);
            if(index > -1) {
                return state.map(item => {
                    if(item.id == action.employee.id) return action.employee;
                    return item;
                })
            } else {
                return [
                    ...state,
                    action.employee
                ]
            }
        }
        case ADD_EMPLOYEE: {
            return [
                ...state,
                action.employee
            ];
        }
        case EMPLOYEE_UPDATED: {
            return state.map(item => {
                if(item.id == action.employee.id) return action.employee;
                return item;
            });
        }
        case EMPLOYEE_DELETED: {
            return state.filter(item => item.id != action.employeeId)
        }
        default: return state;
    }
};