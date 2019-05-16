import { SET_SKILLS, ADD_SKILL } from '../constants/Contants'

export default function skills(state = [], action = {}) {
    switch (action.type) {
        case SET_SKILLS: {
            return action.skills;
        }
        case ADD_SKILL: {
            return [
                ...state,
                action.skill
            ];
        }
        default: return state;
    }
};