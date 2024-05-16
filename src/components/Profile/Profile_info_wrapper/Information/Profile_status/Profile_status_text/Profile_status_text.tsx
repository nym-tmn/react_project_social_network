import React from 'react';
import { Params } from 'react-router-dom';

import classes from './Profile_status_text.module.css';

type ProfileStatusTextPropsType = {
	statusText: string | null
	setIsEditMode: (isEditMode: boolean) => void
	isOwner: Readonly<Params<string>>
}

const ProfileStatusText: React.FC<ProfileStatusTextPropsType> = (props) => {

	const activateEditMode = () => {
		props.setIsEditMode(true);
	};

	return (
		<>
			{props.isOwner.userId
				? <div className={props.isOwner.userId && classes.notOwnerStatus}>
					{props.statusText || 'No status'}
				</div>
				: <div
					className={classes.status}
					title='Click to edit'
					onClick={activateEditMode}>
					{props.statusText || 'No status'}
				</div>}
		</>
	);
};

export default ProfileStatusText;
