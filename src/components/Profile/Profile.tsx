import React from 'react';

import ProfileInfo from './Profile_info/Profile_info';
import Environment from './Environment/Environment';
import Preloader from '../common/Preloader/Preloader';
import { UserProfileType } from '../../types/types';

import classes from './Profile.module.css';

type ProfilePropsType = {
	profile: UserProfileType | null
	isFetching: boolean
	userStatusText: null | string,
}

const Profile: React.FC<ProfilePropsType> = ({
	profile,
	isFetching,
	userStatusText,
}) => {

	if (isFetching) {
		return (
			<div className={classes.preloader}><Preloader /></div>
		);
	}

	return (
		profile && <div>
			<ProfileInfo
				{...profile}
				userStatusText={userStatusText}
			/>
			<Environment />
		</div>
	);
};

export default Profile;
