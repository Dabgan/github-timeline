import { combineReducers } from "redux";
import commitReducer from "./commits/commitsReducer";
import usernameReducer from "./username/usernameReducer";

const rootReducer = combineReducers({
    commits: commitReducer,
    username: usernameReducer,
});

export default rootReducer;
