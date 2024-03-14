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
			deletePost={props.deletePost}
		/>);

	return (
		<div className={classes.posts}>
			{props.postsData.length === 0 && <div className={classes.noPosts}>Write your first post...</div>}
			{postsElements}
		</div>
	);
};

export default Posts;
