
import React from 'react';
import Header from './Followings_header/Followings_header';
import Followings from './Followings/Followings';

import classes from './../My_followings/My_followings.module.css';

const MyFollowings = (props) => {
	return (
		<div className={classes.followings}>
			<Header />
			<Followings followings={props.followings} />
		</div>
	);
};

export default MyFollowings;