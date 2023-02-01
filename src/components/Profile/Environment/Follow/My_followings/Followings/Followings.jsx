
import React from 'react';
import Following from './Following/Following';

import classes from './Followings.module.css';

const Followings = (props) => {

	let followingsElements = props.followings.followingsData
		.map(following => <Following iconFollowing={following.iconFollowing} name={following.name} />)

	return (
		<div className={classes.items}>
			{followingsElements}
		</div>
	);
};

export default Followings;