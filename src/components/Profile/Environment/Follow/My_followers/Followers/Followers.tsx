import React from 'react';

import Follower from './Follower/Follower';
import { FollowersDataType } from '../../../../../../types/types';

import classes from './Followers.module.css';

type FollowersPropsType = {
	followersData: Array<FollowersDataType>
}

const Followers: React.FC<FollowersPropsType> = (props) => {

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
