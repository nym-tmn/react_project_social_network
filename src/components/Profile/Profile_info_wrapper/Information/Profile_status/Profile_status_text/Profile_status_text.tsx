import React from 'react';

import classes from './Profile_status_text.module.css';

type ProfileStatusTextPropsType = {
	statusText: string | null
	setIsEditMode: (isEditMode: boolean) => void
}

const ProfileStatusText: React.FC<ProfileStatusTextPropsType> = (props) => {

	const activateEditMode = () => {
		props.setIsEditMode(true);
	};

	return (
		<div
			className={classes.status}
			title='Click to edit'
			onClick={activateEditMode}>
			{props.statusText || 'No status'}
		</div>
	);
};

export default ProfileStatusText;
