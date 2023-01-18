
import React from 'react';
import classes from './../Following.module.css';

const Following1 = () => {
	return (
			<div className={classes.item}>
				<a href="#s" className={classes.linkImage}>
					<img src="/img/followings/icon_following_1.png" alt="icon_following_1.png" />
				</a>
				<a href="#s" className={classes.linkName}>name_1</a>
			</div>
	);
};

export default Following1;