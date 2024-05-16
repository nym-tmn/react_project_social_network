import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContactsType, UserProfileType } from '../../../../../types/types';

import classes from './Profile_data_form.module.css';

type ProfileDataFormPropsType = {
	fullName?: string
	aboutMe?: string
	lookingForAJob?: boolean
	lookingForAJobDescription?: string
	contacts?: ContactsType
	saveProfileData: (profileData: UserProfileType) => void
	setIsEditMode: (isEditMode: boolean) => void
}

const ProfileDataForm: React.FC<ProfileDataFormPropsType> = (props) => {

	const [isLookingForAJob, setIsLookingForAJob] = useState(props.lookingForAJob);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserProfileType>({
		mode: 'onChange',
	});

	const onSaveProfileData: SubmitHandler<UserProfileType> = (data) => {
		props.setIsEditMode(false);
		props.saveProfileData(data);
	};

	return (
		<form className={classes.profileDataForm} onSubmit={handleSubmit(onSaveProfileData)}>
			<button className={classes.buttonSaveProfileData}>Save</button>
			<div className={classes.userName}>
				<label>User name:</label>
				<input {...register('fullName', {
					required: 'This field is required',
				})}
					type='text'
					autoFocus
					onFocus={e => e.currentTarget.select()}
					defaultValue={props.fullName}
					placeholder={'Enter your name'} />
				{errors.fullName?.message && <div className={classes.error}>{errors.fullName?.message}</div>}
			</div>
			<div className={classes.aboutMe}>
				<label>About me:</label>
				<textarea {...register('aboutMe', {
					required: 'This field is required',
				})}
					onFocus={e => e.currentTarget.select()}
					defaultValue={props.aboutMe}
					placeholder={'Write a little about yourself'} />
				{errors.aboutMe?.message && <div className={classes.error}>{errors.aboutMe?.message}</div>}
			</div>
			<div className={classes.lookingForAJob}>
				<label>Looking for a job:</label>
				<input {...register('lookingForAJob')}
					onClick={() => { setIsLookingForAJob(!isLookingForAJob); }}
					type='checkbox'
					title='Are you looking for a job'
					defaultChecked={props.lookingForAJob}
				/>
			</div>
			{isLookingForAJob && <div className={classes.lookingForAJobDescription}>
				<label>My professional skills:</label>
				<textarea {...register('lookingForAJobDescription', {
					required: 'This field is required',
				})}
					onFocus={e => e.currentTarget.select()}
					defaultValue={props.lookingForAJobDescription}
					placeholder={'Write a little about your professional skills'} />
				{errors.lookingForAJobDescription?.message && <div className={classes.error}>{errors.lookingForAJobDescription?.message}</div>}
			</div>}
			<div className={classes.contactsContainer}>
				<div className={classes.contactsTitle}>Contacts:</div>
				<div className={classes.contactsItems}>
					{props.contacts
						&& Object
							.entries(props.contacts)
							.map((key) => {
								return (
									<div key={key[0]}>
										<label>{key[0]}</label>
										<input {...register(`contacts.${key[0]}` as keyof UserProfileType, {
											pattern: {
												// eslint-disable-next-line no-useless-escape
												value: /https?:\/\/(www\.)?[-\w@:%_\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-\w()@:%\.\+~#=\/\/?&]*)/i,
												message: 'Please enter valid address',
											},
										})}
											placeholder={key[0]}
											onFocus={e => e.currentTarget.select()}
											type="text"
											defaultValue={key[1]} />
										{errors.contacts && <div className={classes.error}>{errors.contacts[key[0] as keyof ContactsType]?.message}</div>}
									</div>
								);
							})}
				</div>
			</div>
		</form>
	);
};

export default ProfileDataForm;
