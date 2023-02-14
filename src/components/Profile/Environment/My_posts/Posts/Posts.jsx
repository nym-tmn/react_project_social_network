
import React from 'react';
import Post from './Post/Post';

import classes from './Posts.module.css';

const Posts = (props) => {

	let postsElements = props.posts
		.map(post => <Post
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