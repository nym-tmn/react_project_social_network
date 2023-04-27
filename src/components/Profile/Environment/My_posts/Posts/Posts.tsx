import React from 'react';

import Post from './Post/Post';
import { PostsPropsType } from './Posts_container';

import classes from './Posts.module.css';

const Posts: React.FC<PostsPropsType> = (props) => {

	const postsElements = props.postsData
		.map(post => <Post
			key={post.id}
			id={post.id}
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
