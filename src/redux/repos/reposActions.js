import axios from "axios";
import parse from "parse-link-header";
import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    FETCH_NEXT_PAGE,
    SET_NEXT_PAGE_FLAG_REPOS,
    SET_REPOSITORY_LINK,
} from "./reposType";

export const fetchReposRequest = () => {
    return {
        type: FETCH_REPOS_REQUEST,
    };
};
export const fetchReposSuccess = (repos) => {
    return {
        type: FETCH_REPOS_SUCCESS,
        payload: repos,
    };
};
export const fetchReposFailure = (error) => {
    return {
        type: FETCH_REPOS_FAILURE,
        payload: error,
    };
};

export const fetchNextPage = () => {
    return {
        type: FETCH_NEXT_PAGE,
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

export const fetchRepos = (username, history) => {
    return (dispatch) => {
        dispatch(fetchReposRequest());
        const config = {
            method: "get",
            url: `https://api.github.com/users/${username}`,
        };
        axios(config)
            .then((res) => {
                history.push("/repos");
                const reposUrl = res.data.repos_url;
                dispatch(setRepoLink(reposUrl));
                return reposUrl;
            })
            .then((reposUrl) => {
                axios(reposUrl)
                    .then((res) => {
                        findNextReposLink(dispatch, res);
                        dispatch(fetchReposSuccess(res.data));
                    })
                    .catch((error) => dispatch(fetchReposFailure(error)));
            })
            .catch((error) => {
                dispatch(fetchReposFailure(error.message));
            });
    };
};

export const fetchReposNextPage = (link, data) => {
    return (dispatch) => {
        dispatch(fetchNextPage());
        axios(link)
            .then((res) => {
                // get link to the next page of repos
                const links = parse(res.headers.link);
                const nextLink = links.next.url;
                dispatch(setRepoLink(nextLink));
                return nextLink;
            })
            .then((resLink) => {
                axios(resLink)
                    .then((res) => {
                        findNextReposLink(dispatch, res);
                        // update list of repositories
                        const newRepos = [...data, ...res.data];
                        dispatch(fetchReposSuccess(newRepos));
                    })
                    .catch((error) => dispatch(fetchReposFailure(error)));
            })
            .catch((error) => dispatch(fetchReposFailure(error)));
    };
};

// if there is link to the next page, set new link and show button
const findNextReposLink = (dispatch, res) => {
    if (parse(res.headers.link)) {
        const isNextPage = parse(res.headers.link).next ? true : false;
        return dispatch(setNextPageFlagRepos(isNextPage));
    }
    return;
};
