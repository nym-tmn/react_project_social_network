
import React from 'react';

import classes from './Twitter.module.css';

const Twitter = () => {
	return (
			<div className={classes.twitter}>
			<a href="#s">
				<div className={classes.icon_twitter}></div>
				</a>
				<a href="#s">
					<div className={classes.title}>www.twitter.com/john_smith</div>
				</a>
			</div>
	);
};

export default Twitter;