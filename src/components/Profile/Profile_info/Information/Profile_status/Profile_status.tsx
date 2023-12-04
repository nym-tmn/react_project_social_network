import React, { useState } from 'react';

import classes from './Profile_status.module.css';

type ProfileStatusPropsType = {
	statusText: string | null | undefined
	updateUserStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

	const [isEditMode, setIsEditMode] = useState(false);
	// const [status, setStatus] = useState(props.statusText);

	/* const handleClickEditMode = () => {
		setIsEditMode(!isEditMode);
	}; */

	const activateEditMode = () => {
		setIsEditMode(!isEditMode);
	};

	const deactivateEditMode = () => {
		setIsEditMode(false);
	};

	/* const updateStatus = () => {
		setIsEditMode(false);
	}; */

	return (
		<div>
			<span className={classes.title}>Status:</span>
			{!isEditMode
				? <span
					className={classes.status}
					title='Click to edit'
					onClick={activateEditMode}>
					{/* status ||  */props.statusText || 'No status'}
				</span>
				: <span className={classes.input}>
					<input
						onBlur={deactivateEditMode}
						onFocus={e => e.currentTarget.select()}
						autoFocus
						onChange={e => props.updateUserStatus(e.currentTarget.value)}
						placeholder='Enter Your Status'
						defaultValue={/* status ??  */props.statusText ?? 'No status'} />
				</span>}
		</div>
	);
};

export default ProfileStatus;
