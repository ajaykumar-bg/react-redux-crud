import ApiConstants from '../constants/ApiConstants'
import { LOGIN } from '../constants/Contants'
import StorageService from "../services/StorageService";

function handleResponse(response) {
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function loggingIn(userDetails) {
    return {
        type: LOGIN,
        userDetails
    }
}

export function login(userData) {
    const { baseURL, USER_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${USER_URL}login`, {
            method: 'post',
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => {
            StorageService.setAuthToken(data.id);
            dispatch(loggingIn(userData));
        })
    }
}