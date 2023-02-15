
import React from 'react';
import Followers from './Followers';

const FollowersContainer = (props) => {

	let state = props.store.getState();

	return (
		<Followers followers={state.profilePage.followersData} />
	);
};

export default FollowersContainer;