import React from 'react';

import MyFollowers from './My_followers/My_followers';
import MyFollowings from './My_followings/My_followings';

import classes from './Follow.module.css';

const Follow: React.FC = () => {

	return (
		<div className={classes.follow}>
			<MyFollowers />
			<MyFollowings />
		</div>
	);
};

export default Follow;
