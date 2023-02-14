
import React from 'react';
import User from './User/User';
import Environment from './Environment/Environment';

const Profile = (props) => {
	return (
		<div>
			<User />
			<Environment
				store={props.store}
				// posts={props.posts}
				// dispatch={props.dispatch}
				followers={props.followers}
				followings={props.followings}
				projects={props.projects} />
		</div>
	);
};

export default Profile;