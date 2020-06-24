import { UPDATE_REPOS } from "./reposType";

const initialState = {
    repos: [],
};

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REPOS:
            return {
                ...state,
                repos: action.payload,
            };
        default:
            return state;
    }
};

export default reposReducer;
