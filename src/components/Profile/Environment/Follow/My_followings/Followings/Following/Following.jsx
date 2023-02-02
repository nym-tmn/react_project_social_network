
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Following.module.css';

const Following = (props) => {

	let path = '/profile/followings/' + props.id;

	return (
		<div className={classes.item}>
			<NavLink to={path} className={classes.linkItem}>
				<img src={props.iconFollowing} alt="icon_following_1.png" />
				<div className={classes.name}>{props.name}</div>
			</NavLink>
		</div>
	);
};

export default Following;