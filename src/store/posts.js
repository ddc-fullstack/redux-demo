import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'


const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getAllPosts:(posts, action) => {
      return action.payload
    },
    getPostsByPostUserId: (posts, action) => {
      return action.payload
    }
  }
})

export const {getAllPosts, getPostsByPostUserId} = slice.actions

export const fetchAllPosts = () => async dispatch => {
  const {data} = await httpConfig(`/apis/users/?posts=true`);
  dispatch(getAllPosts(data))
}

export const fetchPostsByPostUserId = (id) =>  async dispatch =>{
  const {data} = await httpConfig(`/apis/users/?postUserId=${id}`);
  dispatch(getPostsByPostUserId(data))
}

export default slice.reducer

