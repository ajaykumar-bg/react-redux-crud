import ApiConstants from '../constants/ApiConstants'
import { SET_EMPLOYEES, ADD_EMPLOYEE, EMPLOYEE_UPDATED, EMPLOYEE_FETCHED, EMPLOYEE_DELETED } from '../constants/Contants'

function handleResponse(response) {
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setEmployees(employees) {
    return {
        type: SET_EMPLOYEES,
        employees
    }
}

export function addEmployee(employee) {
    return {
        type: ADD_EMPLOYEE,
        employee
    }
}

export function employeeUpdated(employee) {
    return {
        type: EMPLOYEE_UPDATED,
        employee
    }
}

export function employeeDeleted(employeeId) {
    return {
        type: EMPLOYEE_DELETED,
        employeeId
    }
}

export function employeeFetched(employee) {
    return {
        type: EMPLOYEE_FETCHED,
        employee
    }
}

export function saveEmployee(data) {
    const { baseURL, EMPLOYEE_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${EMPLOYEE_URL}`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(addEmployee(data)))
    }
}

export function updateEmployee(data) {
    const { baseURL, EMPLOYEE_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${EMPLOYEE_URL}${data.id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(employeeUpdated(data)))
    }
}

export function deleteEmployee(id) {
    const { baseURL, EMPLOYEE_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${EMPLOYEE_URL}${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(employeeDeleted(id)))
    }
}

export function fetchEmployees() {
    const { baseURL, EMPLOYEE_URL } = ApiConstants;
    return dispatch => {
        fetch(`${baseURL}${EMPLOYEE_URL}`)
        .then(res => res.json())
        .then(data => dispatch(setEmployees(data)));
    }
}

export function fetchEmployee(id) {
    const { baseURL, EMPLOYEE_URL } = ApiConstants;
    return dispatch => {
        fetch(`${baseURL}${EMPLOYEE_URL}${id}`)
        .then(res => res.json())
        .then(data => dispatch(employeeFetched(data)));
    }
}