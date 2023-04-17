import React from 'react';

import Follower from './Follower/Follower';

import classes from './Followers.module.css';

const Followers = (props) => {

	const followersElements = props.followersData
		.map(follower => <Follower
			key={follower.id}
			id={follower.id}
			iconFollower={follower.iconFollower}
			name={follower.name} />);

	return (
		<div className={classes.items}>
			{followersElements}
		</div>
	);
};

export default Followers;
