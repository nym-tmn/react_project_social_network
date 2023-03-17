
import React from 'react';

import classes from './Facebook.module.css';

const Facebook = () => {
	return (
			<div className={classes.facebook}>
			<a href="#s">
				<div className={classes.icon_facebook}></div>
				</a>
				<a href="#s">
					<div className={classes.title}>www.facebook.com/john_smith</div>
				</a>
			</div>
	);
};

export default Facebook;