import React from 'react'
import { useSelector } from 'react-redux'

export const PostCard = ({ post }) => {

  const user = useSelector((state) => state.users
      ? state.users.find(user => post.postUserId === user.userId)
      : null
  )

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text">
          <small className="text-muted">{post.username}</small>
        </p>
        <div className="card-footer text-muted text-center">
          {user && <h3>{user.username}</h3>}
        </div>
      </div>
    </div>
  )
}