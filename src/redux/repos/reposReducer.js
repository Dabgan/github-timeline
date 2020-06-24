import { UPDATE_REPOS } from "./reposType";

const initialState = {
    repos: [
        { name: "gabriel", id: "1" },
        { name: "agacia", id: "2" },
        { name: "pimpek", id: "3" },
        { name: "alien chyba", id: "4" },
        { name: "Project02-Technical_Documentation_Page", id: "5" },
    ],
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
