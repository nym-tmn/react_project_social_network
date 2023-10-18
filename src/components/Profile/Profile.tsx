import React from 'react';

import User from './User/User';
import Environment from './Environment/Environment';
import { UserProfileType } from '../../types/types';

const Profile: React.FC<UserProfileType> = (props: UserProfileType) => {

	return (
		<div>
			<User {...props}/>
			<Environment />
		</div>
	);
};

export default Profile;
