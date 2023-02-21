
import React from 'react';
import classes from './../Social_network.module.css';

const Instagram = () => {
	return (
			<div className={classes.instagram}>
				<a href="#s">
					<img src="/img/icon_instagram.png" alt="icon_instagram.png" />
				</a>
				<a href="#s">
					<div className={classes.title}>www.instagram.com/john_smith</div>
				</a>
			</div>
	);
};

export default Instagram;