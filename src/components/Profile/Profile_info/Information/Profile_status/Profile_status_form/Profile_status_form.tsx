import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ProfileInfoPropsType } from '../../../Profile_info';

import classes from './Profile_status_form.module.css';

type ProfileStatusDataForm = {
	userStatus: string
}

type ProfileStatusFormPropsType = {
	isEditMode: boolean
	setIsEditMode: (isEditMode: boolean) => void
}

const ProfileStatusForm: React.FC<ProfileStatusFormPropsType & Pick<ProfileInfoPropsType, 'statusText' | 'updateUserStatus'>> = (props) => {

	const { register, handleSubmit, formState: { errors } } = useForm<ProfileStatusDataForm>({
		mode: 'onChange',
	});

	const onStatusChange: SubmitHandler<ProfileStatusDataForm> = (data: ProfileStatusDataForm) => {
		props.setIsEditMode(!props.isEditMode);
		props.updateUserStatus(data.userStatus);
	};

	return (
		<div className={classes.inputStatus}>
			<form onSubmit={handleSubmit(onStatusChange)}>
				<textarea {...(register('userStatus', {
					onBlur: handleSubmit(onStatusChange),
					maxLength: {
						value: 300,
						message: 'Max length is 300 symbols',
					},
				}))}
					autoFocus
					placeholder='Enter Your Status'
					onFocus={e => e.currentTarget.select()}
					defaultValue={props.statusText || ''}
				/>
				{errors.userStatus?.message && <div className={classes.error}>{errors.userStatus?.message}</div>}
			</form>
		</div>
	);
};

export default ProfileStatusForm;
