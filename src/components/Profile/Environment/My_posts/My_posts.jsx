
import React from 'react';
import Header from './Posts_header/Posts_header';
import EnterPosts from './Enter_posts/Enter_posts';
import Posts from './Posts/Posts';

import classes from './../My_posts/My_posts.module.css';

const MyPosts = (props) => {
	return (
		<div className={classes.myPosts}>
			<Header />
			<EnterPosts addPost={props.addPost} newPostText={props.posts.newPostText} updatePostText={props.updatePostText} />
			<Posts posts={props.posts} />
		</div>
	);
};

export default MyPosts;