import { UPDATE_REPOS } from "./reposType";

export const updateRepos = (repos) => {
    return {
        type: UPDATE_REPOS,
        payload: repos,
    };
};
