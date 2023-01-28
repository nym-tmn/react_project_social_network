
import React from 'react';
import AvatarImage from './Avatar_image/Avatar_image';
import SocialNetworks from './Social_networks/Social_networks';

import classes from './../Avatar/Avatar.module.css';

const Avatar = (props) => {
	return (
			<div className={classes.avatar}>
			<AvatarImage/>
			<SocialNetworks/>
			</div>
	);
};

export default Avatar;