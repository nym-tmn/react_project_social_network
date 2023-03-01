
import React from 'react';
import Header from './Posts_header/Posts_header';
import EnterPostsContainer from './Enter_posts/Enter_posts_container';
import PostsContainer from './Posts/Posts_container';

import classes from './../My_posts/My_posts.module.css';

const MyPosts = () => {
	return (
		<div className={classes.myPosts}>
			<Header />
			<EnterPostsContainer />
			<PostsContainer />
		</div>
	);
};

export default MyPosts;