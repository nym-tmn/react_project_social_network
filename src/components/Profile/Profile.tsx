import React from 'react';

import ProfileInfo from './Profile_info/Profile_info';
import Environment from './Environment/Environment';
import Preloader from '../common/Preloader/Preloader';
import { UserProfileType } from '../../types/types';

import classes from './Profile.module.css';

type ProfilePropsType = {
	profile: UserProfileType | null
	isFetching: boolean
	statusText: null | string,
	updateUserStatus: (status: string | null) => void
}

const Profile: React.FC<ProfilePropsType> = ({
	profile,
	isFetching,
	statusText,
	updateUserStatus,
}) => {

	if (isFetching) {
		return (
			<div className={classes.loadingSpinner}><Preloader /></div>
		);
	}

	return (
		<>
			<ProfileInfo
				{...profile}
				statusText={statusText}
				updateUserStatus={updateUserStatus}
			/>
			<Environment />
		</>
	);
};

export default Profile;
