import {
    FETCH_COMMITS_REQUEST,
    FETCH_COMMITS_SUCCESS,
    FETCH_COMMITS_FAILURE,
    SET_NEXT_PAGE_FLAG_COMMITS,
    SET_COMMITS_LINK,
    FETCH_NEXT_PAGE,
} from "./commitsType";

const initialState = {
    data: [],
    nextPage: false,
    loadingNextPage: false,
    link: "",
    error: "",
    loading: true,
};

const commitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMITS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_NEXT_PAGE:
            return {
                ...state,
                loadingNextPage: true,
            };
        case FETCH_COMMITS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: "",
                loading: false,
                loadingNextPage: false,
            };
        case FETCH_COMMITS_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false,
                loadingNextPage: false,
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
