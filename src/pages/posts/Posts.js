import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getPostsAndUsers} from "../../shared/actions/userPosts-action";
import {PostCard} from "../../shared/PostCard";

export const Posts = () => {

	const dispatch = useDispatch();

	console.log(dispatch)

	const effects = () => {
		dispatch(getPostsAndUsers());
	};

	const inputs = [];

	useEffect(effects, inputs);

	const posts = useSelector(state => (state.posts ? state.posts : []));



	return (
		<>
			<div className="card-columns">
				{posts.map(post => <PostCard post={post} key={post.postId}/>)}
			</div>
		</>
	);


};

