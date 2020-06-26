import {
    FETCH_COMMITS_REQUEST,
    FETCH_COMMITS_SUCCESS,
    FETCH_COMMITS_FAILURE,
    SET_NEXT_PAGE_FLAG_COMMITS,
    SET_COMMITS_LINK,
} from "./commitsType";

const initialState = {
    data: [
        { message: "initial guwno", date: "6-9" },
        { message: "test commit", date: "9-6" },
    ],
    nextPage: false,
    link: "",
    error: "",
};

const commitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMITS_REQUEST:
            return {
                ...state,
            };
        case FETCH_COMMITS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: "",
            };
        case FETCH_COMMITS_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload,
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
