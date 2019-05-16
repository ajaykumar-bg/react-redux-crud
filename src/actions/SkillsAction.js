import ApiConstants from '../constants/ApiConstants'

export function fetchSkills() {
    const { baseURL, SKILL_URL } = ApiConstants;
    return dispatch => {
        fetch(`${baseURL}${SKILL_URL}`)
    }
}