import ApiConstants from '../constants/ApiConstants'
import { LOGIN, REGISTER, LOGOUT } from '../constants/Contants'
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

export function loggingIn(userDetails, auth_token) {
    return {
        type: LOGIN,
        userDetails,
        auth_token
    }
}

export function registerUser(userDetails) {
    return {
        type: REGISTER,
        userDetails

    }
}

export function logoutUser() {
    return {
        type: LOGOUT,
        isLoggedIn: false,
        userDetails: {}
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
            StorageService.setLoggedInUser(userData);
            dispatch(loggingIn(userData, data.id));
        })
    }
}

export function register(newUser) {
    const { baseURL, USER_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${USER_URL}`, {
            method: 'post',
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => {
            dispatch(registerUser(newUser));
        })
    }
}

export function logout() {
    const auth_token = StorageService.getAuthToken();
    const { baseURL, USER_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${USER_URL}logout?access_token=${auth_token}`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            StorageService.clearStorage(),
            dispatch(logoutUser()),
            handleResponse
            )
        .then(() => {
        })
    }
}