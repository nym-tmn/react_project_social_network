import React from 'react';

import { ProfilePropsType } from '../../../../../types/types';
import mainAvatar from '../../../../images/main_avatar.png';
// import avatarImage from '../../../../images/avatar2.png';

import classes from './Avatar_image.module.css';

const AvatarImage: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

	return (
		<div className={classes.avatarContiner}>
			<div className={classes.avatarBlock}>
				<img className={classes.avatarImage} src={props.photos?.large || mainAvatar} alt='avatar_image' />
				{/* <img className={classes.avatarImage} src={avatarImage} alt='avatar_image' /> */}
			</div>
		</div>
	);
};

export default AvatarImage;
