import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    FETCH_NEXT_PAGE,
    SET_NEXT_PAGE_FLAG_REPOS,
    SET_REPOSITORY_LINK,
} from "./reposType";

const initialState = {
    data: [],
    nextPage: false,
    loadingNextPage: false,
    link: "",
    error: "",
    loading: false,
};

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_NEXT_PAGE:
            return {
                ...state,
                loadingNextPage: true,
            };
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: "",
                loading: false,
                loadingNextPage: false,
            };
        case FETCH_REPOS_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false,
                loadingNextPage: false,
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
