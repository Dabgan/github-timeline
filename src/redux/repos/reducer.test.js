import * as actions from "./reposType";
import reducer, { initialState } from "./reposReducer";

describe("Repos reducer", () => {
    test("Should return default state", () => {
        const newState = reducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    test("Should return <state.loading: true> if type FETCH_REPOS_REQUEST", () => {
        const newState = reducer(undefined, {
            type: actions.FETCH_REPOS_REQUEST,
        });
        const expectedState = { ...initialState, loading: true };
        expect(newState).toEqual(expectedState);
    });

    test("Should return <state.loadingNextPage: true> if type FETCH_NEXT_PAGE", () => {
        const newState = reducer(undefined, {
            type: actions.FETCH_NEXT_PAGE,
        });
        const expectedState = { ...initialState, loadingNextPage: true };
        expect(newState).toEqual(expectedState);
    });

    test("Should return <state.data = [somedata]> if type FETCH_REPOS_SUCCESS", () => {
        const repos = [
            {
                name: "haha",
                id: "1",
                description: "no description",
                created_at: "today",
            },
            {
                name: "hahaha",
                id: "2",
                description: "description",
                created_at: "tomorrow",
            },
        ];
        const newState = reducer(undefined, {
            type: actions.FETCH_REPOS_SUCCESS,
            payload: repos,
        });
        const expectedState = { ...initialState, data: repos };
        expect(newState).toEqual(expectedState);
    });

    test("Should return <empty data and error> if type FETCH_REPOS_FAILURE", () => {
        const errorMsg = "failed to fetch repos";
        const newState = reducer(undefined, {
            type: actions.FETCH_REPOS_FAILURE,
            payload: errorMsg,
        });
        const expectedState = {
            ...initialState,
            data: [],
            error: errorMsg,
        };
        expect(newState).toEqual(expectedState);
    });

    test("Should return <initial state and state.nextPage: true> if type SET_NEXT_PAGE_FLAG_REPOS", () => {
        const newState = reducer(undefined, {
            type: actions.SET_NEXT_PAGE_FLAG_REPOS,
            payload: true,
        });
        const expectedState = { ...initialState, nextPage: true };
        expect(newState).toEqual(expectedState);
    });

    test("Should return <initial state and state.link: somelink> if type SET_REPOSITORY_LINK", () => {
        const nextPageLink = "https://api.github.com/users/Dabgan/repos";
        const newState = reducer(undefined, {
            type: actions.SET_REPOSITORY_LINK,
            payload: nextPageLink,
        });
        const expectedState = { ...initialState, link: nextPageLink };
        expect(newState).toEqual(expectedState);
    });
});
