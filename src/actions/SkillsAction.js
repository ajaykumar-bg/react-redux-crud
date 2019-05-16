import ApiConstants from '../constants/ApiConstants'
import { SET_SKILLS, ADD_SKILL } from '../constants/Contants'

function handleResponse(response) {
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setSkills(skills) {
    return {
        type: SET_SKILLS,
        skills
    }
}

export function addSkill(skill) {
    return {
        type: ADD_SKILL,
        skill
    }
}

export function saveSkill(data) {
    const { baseURL, SKILL_URL } = ApiConstants;
    return dispatch => {
        return fetch(`${baseURL}${SKILL_URL}`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(addSkill(data)))
    }
}

export function fetchSkills() {
    const { baseURL, SKILL_URL } = ApiConstants;
    return dispatch => {
        fetch(`${baseURL}${SKILL_URL}`)
        .then(res => res.json())
        .then(data => dispatch(setSkills(data)));
    }
}