import { UPDATE_COMMITS } from "./commitsType";

const initialState = {
    commits: [
        { message: "initial guwno", date: "6-9" },
        { message: "test commit", date: "9-6" },
    ],
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
