import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PostCard } from '../shared/PostCard'
import { fetchAllPostsAndUsers } from '../../store/posts'
import { Col, Container, Row } from 'react-bootstrap'

export const Posts = () => {

  const dispatch = useDispatch()

  const effects = () => {
    dispatch(fetchAllPostsAndUsers())
  }

  useEffect(effects, [dispatch])

  const posts = useSelector(state => (state.posts ? state.posts : []))

  return (
    <>

      <Container>
        <Row>
          <Col>
            <h1 className="h2">All The Posts</h1>
          </Col>
        </Row>
        <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {
            posts.map(post => <PostCard post={post} key={post.postId}/>)
          }
        </Row>
      </Container>
    </>
  )

}




