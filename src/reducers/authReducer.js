import { LOGIN, REGISTER, LOGOUT } from '../constants/Contants'
import StorageService from '../services/StorageService'

const auth_token = StorageService.getAuthToken();
const loggedInUser = StorageService.getLoggedInUser();

const defaultState = {
    isLoggedIn: auth_token ? true: false,
    auth_token: auth_token ? auth_token: null,
    username: loggedInUser ? loggedInUser.username : ''
}

export default function authReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggedIn: true,
                auth_token : action.auth_token,
                username: action.userDetails.username
            }
        }
        case REGISTER: {
            return {
                ...state, 
                isLoggedIn: false,
                username: action.userDetails.username
            }
        }

        case LOGOUT: {
            return {
                isLoggedIn: false,
                auth_token: null,
                username: ''
            }
        }
        default: return state;
    }
};