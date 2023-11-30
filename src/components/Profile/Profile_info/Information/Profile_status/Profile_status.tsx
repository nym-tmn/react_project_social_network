import React, { useState } from 'react';

import classes from './Profile_status.module.css';

type ProfileStatusPropsType = {
	userStatusText: string | null | undefined
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

	const [isEditMode, setIsEditMode] = useState(false);
	const [status, setStatus] = useState('');

	const handleClickEditMode = () => {
		setIsEditMode(!isEditMode);
	};

	const updateStatus = () => {
		setIsEditMode(false);
	};

	return (
		<div>
			<span className={classes.title}>Status:</span>
			{!isEditMode
				? <span
					className={classes.status}
					title='Click to edit'
					onClick={handleClickEditMode}>
					{status || props.userStatusText || 'No status'}
				</span>
				: <span className={classes.input}>
					<input
						onBlur={updateStatus}
						onFocus={e => e.currentTarget.select()}
						autoFocus
						onChange={e => setStatus(e.currentTarget.value)}
						placeholder='Enter Your Status'
						defaultValue={status ?? props.userStatusText} />
				</span>}
		</div>
	);
};

export default ProfileStatus;
