import axios from "axios";
import formatDate from "../../formatDate";
import parse from "parse-link-header";

import {
    FETCH_COMMITS_REQUEST,
    FETCH_COMMITS_SUCCESS,
    FETCH_COMMITS_FAILURE,
    SET_NEXT_PAGE_FLAG_COMMITS,
    SET_COMMITS_LINK,
    FETCH_NEXT_PAGE,
} from "./commitsType";

export const fetchCommitsRequest = () => {
    return {
        type: FETCH_COMMITS_REQUEST,
    };
};
export const fetchCommitsSuccess = (data) => {
    return {
        type: FETCH_COMMITS_SUCCESS,
        payload: data,
    };
};
export const fetchCommitsFailure = (error) => {
    return {
        type: FETCH_COMMITS_FAILURE,
        payload: error,
    };
};
export const fetchNextPage = () => {
    return {
        type: FETCH_NEXT_PAGE,
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

export const fetchCommits = (username, repo) => {
    return (dispatch) => {
        dispatch(fetchCommitsRequest());
        const config = {
            method: "get",
            url: `https://api.github.com/repos/${username}/${repo}/commits`,
        };

        axios(config)
            .then((res) => {
                dispatch(fetchCommitsSuccess(getNewCommits(res)));
                return res;
            })
            .then((res) => {
                findNextCommitsLink(dispatch, res);
            })
            .catch((error) => {
                dispatch(fetchCommitsFailure(error.message));
                console.log(error);
            });
    };
};

export const fetchCommitsNextPage = (commits, reposlink) => {
    return (dispatch) => {
        dispatch(fetchNextPage());
        axios(reposlink)
            .then((res) => {
                dispatch(
                    fetchCommitsSuccess([...commits, ...getNewCommits(res)])
                );
                return res;
            })
            .then((res) => {
                findNextCommitsLink(dispatch, res);
            })
            .catch((error) => {
                dispatch(fetchCommitsFailure(error.message));
                console.log(error);
            });
    };
};

// update list of commits
const getNewCommits = (res) => {
    let resCommits = [];
    for (let i = 0; i < res.data.length; i++) {
        const date = new Date(res.data[i].commit.committer.date);
        resCommits.push({
            message: res.data[i].commit.message,
            date: formatDate(date),
        });
    }
    return resCommits;
};

// if there is link to the next page, set new link and show button
const findNextCommitsLink = (dispatch, res) => {
    const links = parse(res.headers.link);
    if (links) {
        parseLink(dispatch, links);
        isNextPageAvailable(dispatch, res);
    }
};

// show button
const isNextPageAvailable = (dispatch, res) => {
    const isNextPage = parse(res.headers.link).next ? true : false;
    dispatch(setNextPageFlagCommits(isNextPage));
};

// set new link
const parseLink = (dispatch, links, reposlink) => {
    const nextLink = links.next ? links.next.url : false;
    dispatch(setCommitsLink(nextLink ? nextLink : reposlink));
};
