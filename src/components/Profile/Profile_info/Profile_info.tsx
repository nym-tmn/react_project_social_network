import React from 'react';
import { Params } from 'react-router-dom';

import CoverPicture from './Cover_picture/Cover_picture';
import AvatarContainer from './Avatar/Avatar_container';
import Information from './Information/Information';
import { ContactsType, PhotosType } from '../../../types/types';

import classes from './Profile_info.module.css';

export type ProfileInfoPropsType = {
	photos?: PhotosType
	fullName?: string
	aboutMe?: string
	lookingForAJob?: boolean
	contacts?: ContactsType
	lookingForAJobDescription?: string
	statusText: null | string,
	updateUserStatus: (status: string | null) => void
	saveUserPhoto: (photos: PhotosType) => void
	errorMessage: null | string,
	isOwner: Readonly<Params<string>>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

	return (
		<div className={classes.user}>
			<CoverPicture/>
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
			/>
		</div>
	);
};

export default ProfileInfo;
