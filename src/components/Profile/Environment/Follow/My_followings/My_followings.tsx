import React from 'react';

import Header from './Followings_header/Followings_header';
import FollowingsContainer from './Followings/Followings_container';

import classes from './My_followings.module.css';

const MyFollowings: React.FC = () => {

	return (
		<div className={classes.followings}>
			<Header />
			<FollowingsContainer />
		</div>
	);
};

export default MyFollowings;
