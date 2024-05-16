import React from 'react';
import { Params } from 'react-router-dom';

import ProfileInfoWrapper from './Profile_info_wrapper/Profile_info_wrapper';
import Environment from './Environment/Environment';
import Preloader from '../common/Preloader/Preloader';
import { UserProfileType } from '../../types/types';

export type ProfilePropsType = {
	profile: UserProfileType | null
	isFetching: boolean
	statusText: null | string,
	updateUserStatus: (status: string | null) => void
	saveUserPhoto: (photos: string | Blob) => void
	errorMessage: null | string,
	isOwner: Readonly<Params<string>>
	saveProfileData: (profileData: UserProfileType) => void
}

const Profile: React.FC<ProfilePropsType> = ({
	profile,
	isFetching,
	statusText,
	updateUserStatus,
	saveUserPhoto,
	errorMessage,
	isOwner,
	saveProfileData,
}) => {

	if (isFetching) {
		return (
			<Preloader />
		);
	}

	return (
		<>
			<ProfileInfoWrapper
				{...profile}
				isOwner={isOwner}
				statusText={statusText}
				updateUserStatus={updateUserStatus}
				saveUserPhoto={saveUserPhoto}
				errorMessage={errorMessage}
				saveProfileData={saveProfileData}
			/>
			<Environment
				isOwner={isOwner} />
		</>
	);
};

export default Profile;
