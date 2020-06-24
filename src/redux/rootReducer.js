import { combineReducers } from "redux";
import commitReducer from "./commits/commitsReducer";
import usernameReducer from "./username/usernameReducer";
import reposReducer from "./repos/reposReducer";

const rootReducer = combineReducers({
    commits: commitReducer,
    username: usernameReducer,
    repos: reposReducer,
});

export default rootReducer;
