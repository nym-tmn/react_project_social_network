import React from 'react';

import Post from './Post/Post';
import { PostsDataType } from '../../../../../types/types';

import classes from './Posts.module.css';

type PostsPropsType = {
	postsData: Array<PostsDataType>
}

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
