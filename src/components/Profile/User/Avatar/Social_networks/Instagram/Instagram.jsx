
import React from 'react';

import classes from './Instagram.module.css';

const Instagram = () => {
	return (
			<div className={classes.instagram}>
				<a href="#s">
				<div className={classes.icon_instagram}></div>
				</a>
				<a href="#s">
					<div className={classes.title}>www.instagram.com/john_smith</div>
				</a>
			</div>
	);
};

export default Instagram;