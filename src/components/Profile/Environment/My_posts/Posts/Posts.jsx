
import React from 'react';
import Post from './Post/Post';

import classes from './Posts.module.css';

const Posts = (props) => {
	// debugger;
	console.log(props);
	console.log(props.posts);
	// console.log(props.posts.postsData);
	let postsElements = props.posts.postsData
		.map(post => <Post
			postIconAvatar={post.postIconAvatar}
			postUserName={post.postUserName}
			postText={post.postText} postImage={post.postImage}
			likesCounter={post.likesCounter}
		/>);

	return (
		<div className={classes.posts}>
			{postsElements}
		</div>
	);
};

export default Posts;