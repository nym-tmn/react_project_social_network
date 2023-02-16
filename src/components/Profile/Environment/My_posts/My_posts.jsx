
import React from 'react';
import Header from './Posts_header/Posts_header';
import PostsContainer from './Posts/Posts_container';

import classes from './../My_posts/My_posts.module.css';


const MyPosts = (/* props */) => {
	return (
		<div className={classes.myPosts}>
			<Header />
			<PostsContainer /* store={props.store} */ />
		</div>
	);
};

export default MyPosts;