import React from 'react';

import AvatarImage from './Avatar_image/Avatar_image';
import { ProfilePropsType } from '../../../../types/types';

import classes from './Avatar.module.css';

const Avatar: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

	return (
			<div className={classes.avatar}>
			<AvatarImage photos={props.photos} />
			</div>
	);
};

export default Avatar;
