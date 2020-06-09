import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { PostCard } from '../shared/PostCard'
import {fetchPostsByPostUserId} from '../../store/posts'
import { fetchUserByUserId } from '../../store/users'


export const UserPosts = ({match}) => {

  // Returns the the userPosts store from redux and assigns it to the userPosts variable.
  const dispatch = useDispatch();

  const sideEffects = () => {
    // The dispatch function takes actions as arguments to make changes to the store/redux.
    dispatch(fetchPostsByPostUserId(match.params.userId));
    dispatch(fetchUserByUserId(match.params.userId));

  };

  // Declare any inputs that will be used by functions that are declared in sideEffects.
  const sideEffectInputs = [match.params.userId];

  /**
   * Pass both sideEffects and sideEffectInputs to useEffect.
   * useEffect is what handles rerendering of components when sideEffects resolve.
   * E.g when a network request to an api has completed and there is new data to display on the dom.
   **/
  useEffect(sideEffects, sideEffectInputs);

  const posts = useSelector(state => (
    state.posts
      ? state.posts.filter(post => post.postUserId === match.params.userId)
      : []
  ));
  const user = useSelector(state => (
    state.users
	    ? state.users[0]
	    : null
  ));

  return (
    <>
      <main className="container">
        {user && (<h2>{user.name}</h2>)}
        <div className="card-group card-columns">
          {
            posts.map(post => <PostCard key={post.postId} post={post}/>)
          }
        </div>
      </main>
    </>
  )
};
