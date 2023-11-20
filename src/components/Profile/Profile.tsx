import React from 'react';

import User from './User/User';
import Environment from './Environment/Environment';
import { ProfilePropsType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';

import classes from './User/User.module.css';

const Profile: React.FC<ProfilePropsType> = (props) => {

	if (props.isFetching) {
		return (
			<div className={classes.preloader}><Preloader /></div>
		);
	}

	return (
		<div>
			<User
				photos={props.photos}
				fullName={props.fullName}
				aboutMe={props.aboutMe}
				contacts={props.contacts}
				lookingForAJob={props.lookingForAJob}
				lookingForAJobDescription={props.lookingForAJobDescription}
				userStatusText={props.userStatusText}
			/>
			<Environment />
		</div>
	);
};

export default Profile;
