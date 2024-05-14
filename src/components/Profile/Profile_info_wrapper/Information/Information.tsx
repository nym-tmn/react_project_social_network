import React, { useState } from 'react';

import ProfileData from './Profile_data/Profile_data';
import ProfileStatus from './Profile_status/Profile_status';
import { ProfileInfoWrapperPropsType } from '../Profile_info_wrapper';
import ProfileDataForm from './Profile_data_form/Profile_data_form';

import classes from './Information.module.css';

const Information: React.FC<Omit<ProfileInfoWrapperPropsType, 'photos' | 'saveUserPhoto' | 'errorMessage' | 'isOwner'>> = (props) => {

	const [isEditMode, setIsEditMode] = useState(false);

	return (
		<div className={classes.information}>
			{!isEditMode
				? <ProfileData
					fullName={props.fullName}
					aboutMe={props.aboutMe}
					lookingForAJob={props.lookingForAJob}
					lookingForAJobDescription={props.lookingForAJobDescription}
					contacts={props.contacts}
					isEditMode={isEditMode}
					setIsEditMode={setIsEditMode}
				/>
				: <ProfileDataForm
					fullName={props.fullName}
					aboutMe={props.aboutMe}
					lookingForAJob={props.lookingForAJob}
					lookingForAJobDescription={props.lookingForAJobDescription}
					contacts={props.contacts}
					saveProfileData={props.saveProfileData}
					setIsEditMode={setIsEditMode}
				/>}
			<ProfileStatus
				statusText={props.statusText}
				updateUserStatus={props.updateUserStatus}
			/>
		</div>
	);
};

export default Information;
