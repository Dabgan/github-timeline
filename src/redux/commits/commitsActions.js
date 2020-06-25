import {
    UPDATE_COMMITS,
    SET_NEXT_PAGE_FLAG_COMMITS,
    SET_COMMITS_LINK,
} from "./commitsType";

export const updateCommits = (commits) => {
    return {
        type: UPDATE_COMMITS,
        payload: commits,
    };
};

export const setNextPageFlagCommits = (boolean) => {
    return {
        type: SET_NEXT_PAGE_FLAG_COMMITS,
        payload: boolean,
    };
};

export const setCommitsLink = (link) => {
    return {
        type: SET_COMMITS_LINK,
        payload: link,
    };
};
