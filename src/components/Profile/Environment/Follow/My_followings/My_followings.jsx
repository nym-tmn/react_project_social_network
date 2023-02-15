
import React from 'react';
import Header from './Followings_header/Followings_header';
import FollowingsContainer from './Followings/Followings_container';

import classes from './../My_followings/My_followings.module.css';

const MyFollowings = (props) => {
	return (
		<div className={classes.followings}>
			<Header />
			<FollowingsContainer store={props.store} />
		</div>
	);
};

export default MyFollowings;