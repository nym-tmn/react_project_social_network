
import React from 'react';
import Header from './Posts_header/Posts_header';
import EnterPosts from './Enter_posts/Enter_posts';
import Posts from './Posts/Posts';

import classes from './../My_posts/My_posts.module.css';

const MyPosts = (props) => {
	console.log(props);
	console.log(props.posts);
	return (
		<div className={classes.myPosts}>
			<Header />
			<EnterPosts />
			<Posts posts={props.posts} />
		</div>
	);
};

export default MyPosts;