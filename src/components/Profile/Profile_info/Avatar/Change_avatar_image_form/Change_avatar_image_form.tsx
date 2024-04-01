import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ProfileInfoPropsType } from '../../Profile_info';

import classes from './Change_avatar_image_form.module.css';

type ProfilePhotoDataForm = {
	photos: any
}

const ChangeAvatarImageForm: React.FC<Pick<ProfileInfoPropsType, 'saveUserPhoto' | 'isOwner'>> = (props) => {

	const { register, handleSubmit, reset } = useForm<ProfilePhotoDataForm>();

	const onUploadUserPhoto: SubmitHandler<ProfilePhotoDataForm> = (data: ProfilePhotoDataForm) => {
		props.saveUserPhoto(data.photos[0]);
		reset();
	};

	return (
		<>
			{!props.isOwner.userId && <form className={classes.changeAvatarForm} onChange={handleSubmit(onUploadUserPhoto)}>
				<input {...(register('photos', {
				}))}
					type='file'
					title='Click to choose file' />
			</form>}
		</>
	);
};

export default ChangeAvatarImageForm;
