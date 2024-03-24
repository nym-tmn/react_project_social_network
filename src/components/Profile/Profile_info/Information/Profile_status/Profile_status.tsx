import React, { useState } from 'react';

import ProfileStatusForm from './Profile_status_form/Profile_status_form';
import ProfileStatusText from './Profile_status_text/Profile_status_text';

import classes from './Profile_status.module.css';

type ProfileStatusPropsType = {
	statusText: string | null
	updateUserStatus: (status: string | null) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

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
