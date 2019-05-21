import { SET_SKILLS, ADD_SKILL, SKILL_FETCHED, SKILL_UPDATED, SKILL_DELETED } from '../constants/Contants'

export default function skillReducer(state = [], action = {}) {
    switch (action.type) {
        case SET_SKILLS: {
            return action.skills;
        }
        case SKILL_FETCHED: {
            const index = state.findIndex(item => item.id == action.skill.id);
            if(index > -1) {
                return state.map(item => {
                    if(item.id == action.skill.id) return action.skill;
                    return item;
                })
            } else {
                return [
                    ...state,
                    action.skill
                ]
            }
        }
        case ADD_SKILL: {
            return [
                ...state,
                action.skill
            ];
        }
        case SKILL_UPDATED: {
            return state.map(item => {
                if(item.id == action.skill.id) return action.skill;
                return item;
            });
        }
        case SKILL_DELETED: {
            return state.filter(item => item.id != action.skillId)
        }
        default: return state;
    }
};