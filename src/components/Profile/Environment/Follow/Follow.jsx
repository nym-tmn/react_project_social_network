
import React from 'react';
import MyFollowers from './My_followers/My_followers';
import MyFollowings from './My_followings/My_followings';

import classes from './../Follow/Follow.module.css';

const Follow = (props) => {
	return (
		<div className={classes.follow}>
			<MyFollowers store={props.store} />
			<MyFollowings store={props.store} />
		</div>
	);
};

export default Follow;