import { combineReducers } from "redux";
import commitReducer from "./commits/commitsReducer";

const rootReducer = combineReducers({
    commits: commitReducer,
});

export default rootReducer;
