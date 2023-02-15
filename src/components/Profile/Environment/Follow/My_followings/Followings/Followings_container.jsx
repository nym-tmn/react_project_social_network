
import React from 'react';
import Followings from './Followings';

const FollowingsContainer = (props) => {

	let state = props.store.getState();

	return (
		<Followings followings={state.profilePage.followingsData} />
	);
};

export default FollowingsContainer;