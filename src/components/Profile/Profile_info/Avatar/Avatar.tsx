import React from 'react';

import AvatarImage from './Avatar_image/Avatar_image';
import { ProfileInfoPropsType } from '../Profile_info';

import classes from './Avatar.module.css';

const Avatar: React.FC<Pick<ProfileInfoPropsType, 'photos'>> = (props) => {

	return (
			<div className={classes.avatar}>
			<AvatarImage photos={props.photos} />
			</div>
	);
};

export default Avatar;
