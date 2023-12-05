import React from 'react';

import CoverPicture from './Cover_picture/Cover_picture';
import Avatar from './Avatar/Avatar';
import Information from './Information/Information';
import { ContactsType, PhotosType } from '../../../types/types';

import classes from './Profile_info.module.css';

export type ProfileInfoPropsType = {
	photos: PhotosType
	fullName: string
	aboutMe: string
	lookingForAJob: boolean
	contacts: ContactsType
	lookingForAJobDescription: string
	statusText: null | string,
	updateUserStatus: (status: string | null) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

	return (
		<div className={classes.user}>
			<CoverPicture/>
			<Avatar photos={props.photos} />
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
