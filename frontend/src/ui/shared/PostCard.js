import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Card } from 'react-bootstrap'

export const PostCard = ({ post }) => {
  const { postUserId } = post

  const user = useSelector((state) => state?.users[postUserId]
    ? state?.users[postUserId]
    : null

  )

  return (
    <Col>
      <Card className='text-white h-100 text-center bg-dark'>
        <Card.Title className='pt-2'>{post.title}</Card.Title>
        <Card.Body className='d-flex align-items-center'>

          <div>
            <Card.Text>{post.body}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className='text-muted '>
          {user && <h3 className='h5'>{user.username}</h3>}
        </Card.Footer>
      </Card>
    </Col>
  )
}
