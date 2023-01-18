
import React from 'react';
import classes from './../Social_network.module.css';

const Facebook = () => {
	return (
			<div className={classes.facebook}>
				<a href="#s">
					<img src="/img/icon_facebook.png" alt="icon_facebook.png" />
				</a>
				<a href="#s">
					<div className={classes.title}>www.facebook.com/john_smith</div>
				</a>
			</div>
	);
};

export default Facebook;