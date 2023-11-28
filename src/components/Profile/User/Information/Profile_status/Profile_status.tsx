import React, { useState } from 'react';

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
		<div onBlur={updateStatus}>
			{!isEditMode
				? <span title='Click to edit' onClick={handleClickEditMode}>Status: {status || props.userStatusText || 'No status'}</span>
				: <div>Status: <input autoFocus onChange={e => setStatus(e.currentTarget.value)} placeholder='Enter Your Status' defaultValue={props.userStatusText ?? ''} /></div>}
		</div>
	);
};

export default ProfileStatus;
