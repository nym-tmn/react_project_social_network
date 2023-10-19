import React from 'react';

import { UserProfileType } from '../../../../../types/types';
// import avatarImage from '../../../../images/avatar2.png';

import classes from './Avatar_image.module.css';

const AvatarImage: React.FC<UserProfileType> = (props: UserProfileType) => {

	return (
		<div className={classes.avatarContiner}>
			<div className={classes.avatarBlock}>
				<img className={classes.avatarImage} src={props.photos?.large} alt='avatar_image' />
				{/* <img className={classes.avatarImage} src={avatarImage} alt='avatar_image' /> */}
			</div>
		</div>
	);
};

export default AvatarImage;
