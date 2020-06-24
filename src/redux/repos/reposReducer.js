import {
    UPDATE_REPOS,
    SET_NEXT_PAGE_FLAG,
    SET_REPOSITORY_LINK,
} from "./reposType";

const initialState = {
    repos: [
        { name: "gabriel", id: "1" },
        { name: "agacia", id: "2" },
        { name: "pimpek", id: "3" },
        { name: "alien chyba", id: "4" },
        { name: "Project02-Technical_Documentation_Page", id: "5" },
    ],
    nextPage: false,
    link: "",
};

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REPOS:
            return {
                ...state,
                repos: action.payload,
            };
        case SET_NEXT_PAGE_FLAG:
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
