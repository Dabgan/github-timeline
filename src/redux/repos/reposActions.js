import {
    UPDATE_REPOS,
    SET_NEXT_PAGE_FLAG_REPOS,
    SET_REPOSITORY_LINK,
} from "./reposType";

export const updateRepos = (repos) => {
    return {
        type: UPDATE_REPOS,
        payload: repos,
    };
};

export const setNextPageFlagRepos = (boolean) => {
    return {
        type: SET_NEXT_PAGE_FLAG_REPOS,
        payload: boolean,
    };
};

export const setRepoLink = (link) => {
    return {
        type: SET_REPOSITORY_LINK,
        payload: link,
    };
};
