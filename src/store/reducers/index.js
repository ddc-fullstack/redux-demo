import {combineReducers} from "redux"
import userReducer from "./user-reducer";
import PostsReducer from "./posts-reducer"

export const reducers = combineReducers({
	users: userReducer,
	posts: PostsReducer,
})
