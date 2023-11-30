import React from 'react';

import mainAvatar from '../../../../images/main_avatar.png';
import { ProfileInfoPropsType } from '../../Profile_info';

import classes from './Avatar_image.module.css';

const AvatarImage: React.FC<Pick<ProfileInfoPropsType, 'photos'>> = (props) => {

	return (
		<div className={classes.avatarContiner}>
			<div className={classes.avatarBlock}>
				<img className={classes.avatarImage} src={props.photos?.large || mainAvatar} alt='avatar_image' />
			</div>
		</div>
	);
};

export default AvatarImage;
