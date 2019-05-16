import ApiConstants from '../constants/ApiConstants'
import { SET_SKILLS } from '../constants/Contants'
// export const SET_SKILLS = 'SET_SKILLS'

export function setSkills(skills) {
    return {
        type: SET_SKILLS,
        skills
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