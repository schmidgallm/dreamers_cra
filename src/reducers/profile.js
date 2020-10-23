import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from '../actions/types';

// init initial state
const initialState = {
    profile: null,
    prompts: [],
    stories: [],
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null,
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                prompts: [],
                stories: [],
                loading: false,
            };
        default:
            return state;
    }
}
