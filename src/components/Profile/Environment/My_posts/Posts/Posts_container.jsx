
import React from 'react';
import Posts from './Posts';


const PostsContainer = (props) => {

	let state = props.store.getState();

	return (
		<Posts posts={state.profilePage.postsData} />
	);
};

export default PostsContainer;