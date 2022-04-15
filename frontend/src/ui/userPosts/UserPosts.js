import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { PostCard } from '../shared/PostCard'
import {fetchPostsByPostUserId} from '../../store/posts'
import { fetchUserByUserId, selectUserByUserId } from '../../store/users'
import {useParams} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

export const UserPosts = () => {

  // Returns the userPosts store from redux and assigns it to the userPosts variable.
  const dispatch = useDispatch();

  //grab the userId from the url
  let { userId } = useParams();

  const sideEffects = () => {
    // The dispatch function takes actions as arguments to make changes to the store/redux.
    dispatch(fetchPostsByPostUserId(userId));
    dispatch(fetchUserByUserId(userId));

  };

  /**
   * Pass both sideEffects and sideEffectInputs to useEffect.
   * useEffect is what handles rendering of components when sideEffects resolve.
   * E.g when a network request to an api has completed and there is new data to display on the dom.
   **/
  useEffect(sideEffects,  [userId, dispatch]);

  const posts = useSelector(state => (
    state.posts
      ? state.posts.filter(post => post.postUserId === userId)
      : []
  ));
  const user = useSelector(selectUserByUserId(userId));


  return (
    <>
      <Container>
        <Row>
          <Col>
        {user && (<h2 className="text-center">{user.name}</h2>)}
          </Col>
        </Row>
        <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {
            posts.map(post => <PostCard key={post.postId} post={post}/>)
          }
          </Row>
        </Container>
    </>
  )
};
