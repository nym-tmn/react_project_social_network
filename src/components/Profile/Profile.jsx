
import React from 'react';
import User from './User/User';
import Environment from './Environment/Environment';

const Profile = (props) => {
	return (
		<div>
			<User />
			<Environment posts={props.posts} />
		</div>
	);
};

export default Profile;