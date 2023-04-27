import React from 'react';

import Following from './Following/Following';
import { FollowingsPropsType } from './Followings_container';

import classes from './Followings.module.css';

const Followings: React.FC<FollowingsPropsType> = (props) => {

	const followingsElements = props.followingsData
		.map(following => <Following
			key={following.id}
			id={following.id}
			iconFollowing={following.iconFollowing}
			name={following.name} />);

	return (
		<div className={classes.items}>
			{followingsElements}
		</div>
	);
};

export default Followings;
