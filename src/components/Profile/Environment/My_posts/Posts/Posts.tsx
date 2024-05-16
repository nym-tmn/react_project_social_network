import React from 'react';

import Post from './Post/Post';
import { PostsContainerPropsType } from './Posts_container';

import classes from './Posts.module.css';

const Posts: React.FC<PostsContainerPropsType> = (props) => {

	const postsElements = props.postsData
		.map(post => <Post
			key={post.id}
			id={post.id}
			smallPhoto={props.smallPhoto}
			postUserName={props.userName}
			postText={post.postText}
			postImage={post.postImage}
			likesCounter={post.likesCounter}
			deletePost={props.deletePost}
			isOwner={props.isOwner}
		/>);

	return (
		<div className={classes.posts}>
			{props.postsData.length === 0 && <div className={classes.noPosts}>Write your first post...</div>}
			{postsElements}
		</div>
	);
};

export default Posts;
