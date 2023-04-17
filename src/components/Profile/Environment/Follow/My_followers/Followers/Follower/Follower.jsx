import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Follower.module.css';

const Follower = (props) => {

	const path = `/profile/followers/${props.id}`;

	return (
		<div className={classes.item}>
			<NavLink to={path} className={classes.linkItem}>
				<div className={classes.linkImageContiner}>
					<img src={props.iconFollower} alt="icon_follower.png" />
				</div>
				<div className={classes.name}>{props.name}</div>
			</NavLink>
		</div>
	);
};

export default Follower;
