import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ProfileInfoWrapperPropsType } from '../../Profile_info_wrapper';

import classes from './Change_avatar_image_form.module.css';

type ProfilePhotoDataForm = {
	photos: string | Blob[]
}

const ChangeAvatarImageForm: React.FC<Pick<ProfileInfoWrapperPropsType, 'saveUserPhoto' | 'isOwner'>> = (props) => {

	const { register, handleSubmit, reset } = useForm<ProfilePhotoDataForm>();

	const onUploadUserPhoto: SubmitHandler<ProfilePhotoDataForm> = (data: ProfilePhotoDataForm) => {
		props.saveUserPhoto(data.photos[0]);
		reset();
	};

	return (
		<>
			{!props.isOwner.userId && <form className={classes.changeAvatarForm} onChange={handleSubmit(onUploadUserPhoto)}>
				<input className={classes.changeAvatarInput} {...(register('photos', {
				}))}
					type='file'
					title='Click to choose file' />
			</form>}
		</>
	);
};

export default ChangeAvatarImageForm;
