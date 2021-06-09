import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { PostCard } from '../shared/PostCard'
import { fetchAllPostsAndUsers } from '../../store/posts'


export const Posts = () => {

	const dispatch = useDispatch();

	console.log(dispatch)

	const effects = () => {
		dispatch(fetchAllPostsAndUsers());
	};

	useEffect(effects, [dispatch]);

	const posts = useSelector(state => (state.posts ? state.posts : []));



	return (
		<>
			<div className="card-columns">
				{posts.map(post => <PostCard post={post} key={post.postId}/>)}
			</div>
		</>
	);


};

