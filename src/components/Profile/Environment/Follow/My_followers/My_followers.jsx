import React from 'react';

import Header from './Followers_header/Followers_header';
import FollowersContainer from './Followers/Followers_container';

import classes from './My_followers.module.css';

const MyFollowers = () => {

	return (
		<div className={classes.followers}>
			<Header />
			<FollowersContainer />
		</div>
	);
};

export default MyFollowers;
