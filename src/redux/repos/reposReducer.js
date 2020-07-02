import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    SET_NEXT_PAGE_FLAG_REPOS,
    SET_REPOSITORY_LINK,
} from "./reposType";

const initialState = {
    data: [],
    nextPage: false,
    link: "",
    error: "",
};

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOS_REQUEST:
            return {
                ...state,
            };
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: "",
            };
        case FETCH_REPOS_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload,
            };
        case SET_NEXT_PAGE_FLAG_REPOS:
            return {
                ...state,
                nextPage: action.payload,
            };
        case SET_REPOSITORY_LINK:
            return {
                ...state,
                link: action.payload,
            };
        default:
            return state;
    }
};

export default reposReducer;
