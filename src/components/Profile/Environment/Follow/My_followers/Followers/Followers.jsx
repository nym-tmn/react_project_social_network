
import React from 'react';
import Follower from './Follower/Follower';

import classes from './Followers.module.css';

const Followers = (props) => {
	let followersElements = props.followers.followersData
		.map(follower => <Follower iconFollower={follower.iconFollower} name={follower.name} />)

	return (
		<div className={classes.items}>
			{followersElements}
		</div>
	);
};

export default Followers;