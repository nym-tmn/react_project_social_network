import React from 'react';

import mainAvatar from '../../../../images/main_avatar.png';
import { ProfileInfoWrapperPropsType } from '../../Profile_info_wrapper';

import classes from './Avatar_image.module.css';

const AvatarImage: React.FC<Pick<ProfileInfoWrapperPropsType, 'photos'>> = (props) => {

	return (
		<>
			<img className={classes.avatarImage} src={props.photos?.large || mainAvatar} alt='avatar_image' />
		</>
	);
};

export default AvatarImage;
