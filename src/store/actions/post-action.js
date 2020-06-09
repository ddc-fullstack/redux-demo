
import _ from "lodash";
import {getUserByUserId} from "./user-action";
import { httpConfig } from '../../utils/http-config'

export const getAllPosts = () => async dispatch => {
	const {data} = await httpConfig(`/apis/users/?posts=true`);
	dispatch({type: "GET_ALL_POSTS", payload: data})
};

export const getPostsByPostUserId = (userId) => async dispatch => {
	const {data} = await httpConfig(`/apis/users/?postUserId=${userId}`);

	dispatch({type: "GET_USER_POSTS", payload: data})
};


export const getPostsAndUsers = () => async (dispatch, getState) => {

	await dispatch(getAllPosts());
	//commented out lines below are equivalent to the _ chain method


	const userIds = _.uniq(_.map(getState().posts, "postUserId"));
	userIds.forEach(id => dispatch(getUserByUserId(id)));

	// _.chain(getState().posts)
	// 	.map("postUserId")
	// 	.uniq()
	// 	.forEach(id => dispatch(getUserByUserId(id)))
	// 	.value()
};