import _ from "lodash";
import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
import { fetchUserByUserId } from './users'

const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setInitialPosts: (posts, action) => {
      return action.payload
    },
    setInitialPostsByPostUserId: (posts, action) => {
      return action.payload
    }
  }
})

export const {setInitialPosts, setInitialPostsByPostUserId} = slice.actions


export const fetchPostsByPostUserId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/posts/postUserId/${id}`);
  dispatch(setInitialPostsByPostUserId(data))
}

export const fetchAllPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(setInitialPosts)
  const userIds = _.uniq(_.map(getState().posts, "postUserId"));
  userIds.forEach(id => dispatch(fetchUserByUserId(id)));

}

export default slice.reducer
