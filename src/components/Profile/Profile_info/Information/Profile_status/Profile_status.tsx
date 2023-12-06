import React, { useEffect, useState } from 'react';

import classes from './Profile_status.module.css';

type ProfileStatusPropsType = {
	statusText: string | null
	updateUserStatus: (status: string | null) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

	const [isEditMode, setIsEditMode] = useState(false);
	const [status, setStatus] = useState(props.statusText);

	useEffect(() => {
		if (!status) {
			setStatus(props.statusText);
		}
	}, [status, props.statusText]);

	const activateEditMode = () => {
		setIsEditMode(!isEditMode);
	};

	const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStatus(event.currentTarget.value);
	};

	const deactivateEditMode = () => {
		setIsEditMode(false);
		props.updateUserStatus(status);
	};

	return (
		<div>
			<span className={classes.title}>Status:</span>
			{!isEditMode
				? <span
					className={classes.status}
					title='Click to edit'
					onClick={activateEditMode}>
					{props.statusText || 'No status'}
				</span>
				: <span className={classes.input}>
					<input
						onBlur={deactivateEditMode}
						onFocus={e => e.currentTarget.select()}
						autoFocus
						onChange={onStatusChange}
						placeholder='Enter Your Status'
						value={status || 'No status'}
					/>
				</span>}
		</div>
	);
};

export default ProfileStatus;
