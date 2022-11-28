
import React from 'react';
import { PostCard } from '../shared/PostCard'

import {useParams} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

export const UserPosts = () => {


  return (
    <>
      <Container>
        <Row>
          <Col>
      (<h2 className="text-center">{}</h2>)}
          </Col>
        </Row>
        <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {
            // posts.map(post => <PostCard key={post.postId} post={post}/>)
          }
          </Row>
        </Container>
    </>
  )
};
