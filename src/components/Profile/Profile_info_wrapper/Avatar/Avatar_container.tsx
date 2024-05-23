import React from 'react';

import { ProfileInfoWrapperPropsType } from '../Profile_info_wrapper';
import AvatarImage from './Avatar_image/Avatar_image';
import ChangeAvatarImageForm from './Change_avatar_image_form/Change_avatar_image_form';

import classes from './Avatar_container.module.css';

const AvatarContainer: React.FC<Pick<ProfileInfoWrapperPropsType, 'photos' | 'saveUserPhoto' | 'errorMessage' | 'isOwner'>> = (props) => {

	return (
		<div className={classes.avatarContainer}>
			<AvatarImage
				photos={props.photos}
			/>
			<ChangeAvatarImageForm
				saveUserPhoto={props.saveUserPhoto}
				isOwner={props.isOwner}
			/>
			<div className={`${props.errorMessage && classes.errorVisible} ${classes.errorMessage}`}>{props.errorMessage}</div>
		</div>
	);
};

export default AvatarContainer;
