import { UPDATE_REPOS } from "./reposType";

const initialState = {
    repos: [
        { name: "gabriel" },
        { name: "agacia" },
        { name: "pimpek" },
        { name: "alien chyba" },
        { name: "Project02-Technical_Documentation_Page" },
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
