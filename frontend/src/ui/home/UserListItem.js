import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UserListItem = (props) => {
  const navigate = useNavigate()
  const { user } = props

  // This component takes advantage of the render prop pattern https://css-tricks.com/an-overview-of-render-props-in-react/.
  return (
    <>

      <tr
        onClick={() => {
				  navigate(`user/${user.userId}`)
        }}
      >
        <td>{user.userId}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.username}</td>
        <td>{user.website}</td>
      </tr>
    </>
  )
}
