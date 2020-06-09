import {combineReducers} from "redux"
import users from "./users";
import posts from "./posts"

export const reducers = combineReducers({users, posts})
