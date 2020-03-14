import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";
import {getUserByUserId} from "../../shared/actions/get-all-users";
import { PostCard } from '../posts/PostCard'

export const UserPosts = ({match}) => {

	const dispatch = useDispatch();

	const sideEffects = () => {
		dispatch(getUserPosts(match.params.userId));
		dispatch(getUserByUserId(match.params.userId));
	};

	const sideEffectInputs = [match.params.userId];

	useEffect(sideEffects, sideEffectInputs);

	const posts = useSelector(state => (
		state.posts ? state.posts : []
	));
	const user = useSelector(state => (
		state.users ? state.users[0] : null
	));

	return (
		<>
			<main className="container">
				{user && (<h2>{user.name}</h2>)}
				<div className="card-group card-columns">
					{posts.map(post => <PostCard post={post} key={post.postId}/>)}
				</div>
			</main>
		</>
	)
};
