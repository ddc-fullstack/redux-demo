import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    setInitialUsers: (users, action) => {
      return action.payload
    },
    setUserByUserId: (users, action) => {
      users[action.payload.id] = action.payload.data
    }
  }
})

export const { setInitialUsers, setUserByUserId } = slice.actions

export const fetchAllUsers = () => async dispatch => {

  const { data } = await httpConfig(`/apis/users/`)

  if (Array.isArray(data) === false) {
    throw new Error('Data is malformed')
  }

  const userDictionary = data.reduce((accumulator, currentValue) => {
      accumulator[currentValue.userId] = currentValue
      return accumulator
    },
    {}
  )
  dispatch(setInitialUsers(userDictionary))
}

export const fetchUserByUserId = (id) => async dispatch => {
  const { data } = await httpConfig(`/apis/users/${id}`)
  dispatch(setUserByUserId({ id, data }))
}

export default slice.reducer