// import { createSelector, createSlice } from '@reduxjs/toolkit'
// import { httpConfig } from '../utils/http-config'
//
// const slice = createSlice({
//   name: 'users',
//   initialState: {},
//   reducers: {
//     setInitialUsers: (users, action) => {
//       return action.payload
//     },
//     setUserByUserId: (users, action) => {
//       users[action.payload.id] = action.payload.data
//     }
//   }
// })
//
// export const { setInitialUsers, setUserByUserId } = slice.actions
//
// // redux thunks for grabbing data from RESTAPIs and adding that data to redux
// export const fetchAllUsers = () => async dispatch => {
//
//   const { data } = await httpConfig(`/apis/users/`)
//
//   if (Array.isArray(data) === false) {
//     throw new Error('Data is malformed')
//   }
//
//   const userDictionary = data.reduce((accumulator, currentValue) => {
//       accumulator[currentValue.userId] = currentValue
//       return accumulator
//     },
//     {}
//   )
//   dispatch(setInitialUsers(userDictionary))
// }
//
// export const fetchUserByUserId = (id) => async (dispatch, getState) => {
//
//   const users = getState().users
//   console.log(users[id])
//   if (users[id] === undefined) {
//     console.log(users[id])
//     const { data } = await httpConfig(`/apis/users/${id}`)
//     dispatch(setUserByUserId({ id, data }))
//   }
// }
//
// export const selectUserByUserId = (id) =>
//   createSelector(
//     state => state?.users[id]
//     ? state?.users[id]
//     : null
//   )
//
// export default slice.reducer

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/apis/user' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/'
    })
  })
})

export const { useGetAllUsersQuery } = userApi
