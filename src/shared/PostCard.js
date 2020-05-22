import React from 'react'
import { useSelector } from 'react-redux'

export const PostCard = ({ post }) => {

  const users = useSelector((state) => state.users ? state.users : null)

  const FindUsername = () => {
    const user = users.find(user => post.postUserId === user.userId)
    return (
      <>
        {user && <h3>{user.username}</h3>}
      </>
    )
  }

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text">
          <small className="text-muted">{post.username}</small>
        </p>
        <div className="card-footer text-muted text-center">
         <FindUsername />
        </div>
      </div>
    </div>
  )
}