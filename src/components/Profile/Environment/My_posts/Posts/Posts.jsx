
import React from 'react';
import Post from './Post/Post';

import classes from './Posts.module.css';

const Posts = (props) => {

	let postsElements = props.postsData
		.map(post => <Post
			key={post.id}
			postIconAvatar={post.postIconAvatar}
			postUserName={post.postUserName}
			postText={post.postText}
			postImage={post.postImage}
			likesCounter={post.likesCounter}
		/>);

	return (
		<div className={classes.posts}>
			{postsElements}
		</div>
	);
};

export default Posts;