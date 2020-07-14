import { SET_USER } from "./usernameType";

const initialState = {
    username: "zasraniec",
};

const commitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};

export default commitsReducer;
