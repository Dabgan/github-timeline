import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    SET_NEXT_PAGE_FLAG_REPOS,
    SET_REPOSITORY_LINK,
} from "./reposType";

const initialState = {
    data: [
        { name: "gabriel", id: "1" },
        { name: "agacia", id: "2" },
        { name: "pimpek", id: "3" },
        { name: "alien chyba", id: "4" },
        { name: "Project02-Technical_Documentation_Page", id: "5" },
    ],
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
