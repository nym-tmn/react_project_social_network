
import React from 'react';
import classes from './../Avatar_image/Avatar_image.module.css';

const AvatarImage = (props) => {
	return (
		<div className={classes.avatarContiner}>
			<div className={classes.avatarImage}></div>
		</div>
	);
};

export default AvatarImage;