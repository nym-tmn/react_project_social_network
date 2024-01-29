import React, { useState } from 'react';

import ProfileStatusForm from './Profile_status_form/Profile_status_form';
import ProfileStatusText from './Profile_status_text/Profile_status_text';
import { ProfileInfoPropsType } from '../../Profile_info';

import classes from './Profile_status.module.css';

const ProfileStatus: React.FC<Pick<ProfileInfoPropsType, 'statusText' | 'updateUserStatus'>> = (props) => {

	const [isEditMode, setIsEditMode] = useState(false);

	return (
		<div className={classes.profileStatusGrid}>
			<div className={classes.title}>Status:</div>
			{!isEditMode
				? <ProfileStatusText
					statusText={props.statusText}
					isEditMode={isEditMode}
					setIsEditMode={setIsEditMode}
				/>
				: <ProfileStatusForm
					updateUserStatus={props.updateUserStatus}
					statusText={props.statusText}
					isEditMode={isEditMode}
					setIsEditMode={setIsEditMode}
				/>}
		</div>
	);
};

export default ProfileStatus;
