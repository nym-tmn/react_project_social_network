import React from 'react';

import User from './User/User';
import Environment from './Environment/Environment';
import { UserProfileType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';

import classes from './User/User.module.css';

const Profile: React.FC<UserProfileType> = (props: UserProfileType) => {

	if (!props.userId) {
		return (
			<div className={classes.preloader}><Preloader /></div>
		);
	}

	return (
		<div>
			<User {...props}/>
			<Environment />
		</div>
	);
};

export default Profile;
