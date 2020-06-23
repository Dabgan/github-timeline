import { SET_USER } from "./usernameType";

export const setUsername = (username) => {
    return {
        type: SET_USER,
        payload: username,
    };
};
