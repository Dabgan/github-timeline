import { UPDATE_COMMITS } from "./commitsType";

export const updateCommits = (commits) => {
    return {
        type: UPDATE_COMMITS,
        payload: commits,
    };
};
