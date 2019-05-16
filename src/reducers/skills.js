import { SET_SKILLS } from '../constants/Contants'

export default function skills(state = [], action = {}) {
    switch (action.type) {
        case SET_SKILLS: {
            return action.skills;
        }
        default: return state;
    }
};