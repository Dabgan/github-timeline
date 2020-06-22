import { UPDATE_COMMITS } from "./commitsType";

const initialState = {
    commits: [],
};

const commitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMITS:
            return {
                ...state,
                commits: action.payload,
            };
        default:
            return state;
    }
};

export default commitsReducer;
