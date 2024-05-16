import React from 'react';

import Header from './Posts_header/Posts_header';
import EnterPostsContainer from './Enter_posts/Enter_posts_container';
import PostsContainer from './Posts/Posts_container';
import { ProfilePropsType } from '../../Profile';

import classes from './My_posts.module.css';

const MyPosts: React.FC<Pick<ProfilePropsType, 'isOwner'>> = (props) => {

	return (
		<div className={classes.myPosts}>
			<Header />
			<EnterPostsContainer isOwner={props.isOwner} />
			<PostsContainer isOwner={props.isOwner} />
		</div>
	);
};

export default MyPosts;
