
import React from 'react';
import User from './User/User';
import Environment from './Environment/Environment';

const Profile = (props) => {
	return (
		<div>
			<User />
			<Environment
				posts={props.posts}
				addPost={props.addPost}
				updatePostText={props.updatePostText}
				followers={props.followers}
				followings={props.followings}
				projects={props.projects} />
		</div>
	);
};

export default Profile;