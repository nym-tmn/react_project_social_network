import React from 'react';
import { Params } from 'react-router-dom';

import AvatarContainer from './Avatar/Avatar_container';
import Information from './Information/Information';
import { ContactsType, PhotosType, UserProfileType } from '../../../types/types';

import classes from './Profile_info_wrapper.module.css';

export type ProfileInfoWrapperPropsType = {
	photos?: PhotosType
	fullName?: string
	aboutMe?: string
	lookingForAJob?: boolean
	contacts?: ContactsType
	lookingForAJobDescription?: string
	statusText: null | string,
	updateUserStatus: (status: string | null) => void
	saveUserPhoto: (photos: string | Blob) => void
	errorMessage: null | string,
	isOwner: Readonly<Params<string>>
	saveProfileData: (profileData: UserProfileType) => void
}

const ProfileInfoWrapper: React.FC<ProfileInfoWrapperPropsType> = (props) => {

	return (
		<div className={classes.user}>
			<AvatarContainer
				photos={props.photos}
				saveUserPhoto={props.saveUserPhoto}
				errorMessage={props.errorMessage}
				isOwner={props.isOwner}
			/>
			<Information
				fullName={props.fullName}
				aboutMe={props.aboutMe}
				contacts={props.contacts}
				lookingForAJob={props.lookingForAJob}
				lookingForAJobDescription={props.lookingForAJobDescription}
				statusText={props.statusText}
				updateUserStatus={props.updateUserStatus}
				saveProfileData={props.saveProfileData}
				isOwner={props.isOwner}
			/>
		</div>
	);
};

export default ProfileInfoWrapper;
