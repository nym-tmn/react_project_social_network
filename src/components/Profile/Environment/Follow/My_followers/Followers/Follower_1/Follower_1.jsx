
import React from 'react';
import classes from './../Follower.module.css';

const Follower1 = (props) => {
	return (
				<div className={classes.item}>
					<a href="#s" className={classes.linkImage}>
						<img src="/img/followers/icon_follower_1.png" alt="icon_follower_1.png" />
					</a>
					<a href="#s" className={classes.linkName}>name_1</a>
				</div>
	);
};

export default Follower1;