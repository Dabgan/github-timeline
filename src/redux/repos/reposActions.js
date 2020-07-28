import axios from "axios";
import parse from "parse-link-header";
import * as types from "./reposType";

const fetchNextPage = () => {
    return {
        type: types.FETCH_NEXT_PAGE,
    };
};

export const fetchReposRequest = () => {
    return {
        type: types.FETCH_REPOS_REQUEST,
    };
};
export const fetchReposSuccess = (repos) => {
    return {
        type: types.FETCH_REPOS_SUCCESS,
        payload: repos,
    };
};
export const fetchReposFailure = (error) => {
    return {
        type: types.FETCH_REPOS_FAILURE,
        payload: error,
    };
};

export const setNextPageFlagRepos = (boolean) => {
    return {
        type: types.SET_NEXT_PAGE_FLAG_REPOS,
        payload: boolean,
    };
};
export const setRepoLink = (link) => {
    return {
        type: types.SET_REPOSITORY_LINK,
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
                // go to /repos page and start loading data if username is correct
                history.push("/repos");
                const reposUrl = res.data.repos_url;
                dispatch(setRepoLink(reposUrl));
                return reposUrl;
            })
            .then((reposUrl) => {
                axios(reposUrl)
                    .then((res) => {
                        findNextReposLink(dispatch, res);
                        dispatch(fetchReposSuccess(getReposData(res.data)));
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
                        const newRepos = [...data, ...getReposData(res.data)];
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

// get all the data from API response, and then substract only the essential data
export const getReposData = (res) => {
    const repos = [];
    for (let i = 0; i < res.length; i++) {
        repos.push({
            name: res[i].name,
            id: res[i].id,
            description: res[i].description,
            created_at: res[i].created_at,
        });
    }
    return repos;
};
