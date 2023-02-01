
import React from 'react';
import classes from './../Follower.module.css';

const Follower = (props) => {
	return (
				<div className={classes.item}>
					<a href="#s" className={classes.linkItem}>
				<img src={props.iconFollower} alt="icon_follower_1.png" />
				<div className={classes.name}>{props.name}</div>
					</a>
				</div>
	);
};

export default Follower;