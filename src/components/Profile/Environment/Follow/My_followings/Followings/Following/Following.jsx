
import React from 'react';
import classes from './Following.module.css';

const Following = (props) => {
	return (
		<div className={classes.item}>
			<a href="#s" className={classes.linkItem}>
				<img src={props.iconFollowing} alt="icon_following_1.png" />
				<div className={classes.name}>{props.name}</div>
			</a>
		</div>
	);
};

export default Following;