import {
    GET_PROMPTS,
    GET_PROMPT,
    PROMPT_ERROR,
    UPDATE_LIKES,
    UPDATE_ONE_LIKE,
    DELETE_PROMPT,
    ADD_PROMPT,
    ADD_COMMENT,
    REMOVE_COMMENT,
} from '../actions/types';

// init initial state
const initialState = {
    prompts: [],
    prompt: {},
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROMPTS:
            return {
                ...state,
                prompts: payload,
                loading: false,
            };
        case GET_PROMPT:
            return {
                ...state,
                prompt: payload,
                loading: false,
            };
        case ADD_PROMPT:
            return {
                ...state,
                prompts: [...state.prompts, payload],
                loading: false,
            };
        case DELETE_PROMPT:
            return {
                ...state,
                prompts: state.prompts.filter(prompt => prompt._id !== payload),
                loading: false,
            };
        case PROMPT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case UPDATE_LIKES:
            return {
                ...state,
                prompts: state.prompts.map(prompt =>
                    prompt._id === payload.id
                        ? { ...prompt, likes: payload.likes }
                        : prompt
                ),
                loading: false,
            };
        case UPDATE_ONE_LIKE:
            return {
                ...state,
                prompt: { ...state.prompt, likes: payload.likes },
                loading: false,
            };
        case ADD_COMMENT:
            return {
                ...state,
                prompt: { ...state.prompt, comments: payload },
                loading: false,
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                prompt: {
                    ...state.prompt,
                    comments: payload,
                },
                loading: false,
            };
        default:
            return state;
    }
}
