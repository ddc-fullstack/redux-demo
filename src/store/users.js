import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    getAllUsers: (users, action) => {
      return action.payload
    },
    getUserByUserId: (users, action) => {
      users.push(action.payload)
    }
  }
})

export const {getAllUsers, getUserByUserId} = slice.actions

export const fetchAllUsers = () => async dispatch => {
  const {data} = await httpConfig(`/apis/users/`);
  dispatch(getAllUsers(data))
}

export const fetchUserByUserId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/users/${id}`);
  dispatch(getUserByUserId(data))
}

export default slice.reducer