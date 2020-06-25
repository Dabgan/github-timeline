import {
    UPDATE_COMMITS,
    SET_NEXT_PAGE_FLAG_COMMITS,
    SET_COMMITS_LINK,
} from "./commitsType";

const initialState = {
    commits: [
        { message: "initial guwno", date: "6-9" },
        { message: "test commit", date: "9-6" },
    ],
    nextPage: false,
    link: "",
};

const commitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMITS:
            return {
                ...state,
                commits: action.payload,
            };
        case SET_NEXT_PAGE_FLAG_COMMITS:
            return {
                ...state,
                nextPage: action.payload,
            };
        case SET_COMMITS_LINK:
            return {
                ...state,
                link: action.payload,
            };
        default:
            return state;
    }
};

export default commitsReducer;
