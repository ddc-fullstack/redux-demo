import _ from "lodash";
import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
import { fetchUserByUserId } from './users'

const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getAllPosts: (posts, action) => {
      return action.payload
    },
    getPostsByPostUserId: (posts, action) => {
      return action.payload
    }
  }
})

export const {getAllPosts, getPostsByPostUserId} = slice.actions

export const fetchAllPosts = () => async dispatch => {
  const {data} = await httpConfig(`/apis/posts`);
  dispatch(getAllPosts(data))
}

export const fetchPostsByPostUserId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/posts/postUserId/${id}`);
  dispatch(getPostsByPostUserId(data))
}

export const fetchAllPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchAllPosts())
  const userIds = _.uniq(_.map(getState().posts, "postUserId"));
  userIds.forEach(id => dispatch(fetchUserByUserId(id)));

}

export default slice.reducer
