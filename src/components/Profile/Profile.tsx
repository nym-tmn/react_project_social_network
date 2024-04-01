import React from 'react';
import { Params } from 'react-router-dom';

import ProfileInfo from './Profile_info/Profile_info';
import Environment from './Environment/Environment';
import Preloader from '../common/Preloader/Preloader';
import { PhotosType, UserProfileType } from '../../types/types';

type ProfilePropsType = {
	profile: UserProfileType | null
	isFetching: boolean
	statusText: null | string,
	updateUserStatus: (status: string | null) => void
	saveUserPhoto: (photos: PhotosType) => void
	errorMessage: null | string,
	isOwner: Readonly<Params<string>>
}

const Profile: React.FC<ProfilePropsType> = ({
	profile,
	isFetching,
	statusText,
	updateUserStatus,
	saveUserPhoto,
	errorMessage,
	isOwner,
}) => {

	if (isFetching) {
		return (
			<Preloader />
		);
	}

	return (
		<>
			<ProfileInfo
				{...profile}
				isOwner={isOwner}
				statusText={statusText}
				updateUserStatus={updateUserStatus}
				saveUserPhoto={saveUserPhoto}
				errorMessage={errorMessage}
			/>
			<Environment />
		</>
	);
};

export default Profile;
