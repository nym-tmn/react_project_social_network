
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Follower.module.css';

const Follower = (props) => {

	let path = '/profile/followers/' + props.id;

	return (
		<div className={classes.item}>
			<NavLink to={path} className={classes.linkItem}>
				<img src={props.iconFollower} alt="icon_follower_1.png" />
				<div className={classes.name}>{props.name}</div>
			</NavLink>
		</div>
	);
};

export default Follower;