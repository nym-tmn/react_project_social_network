import React from 'react';
import { NavLink } from 'react-router-dom';
import { FollowDataType } from '../../../../../../../types/types';

import classes from './Follower.module.css';

const Follower: React.FC<FollowDataType> = (props) => {

	const path = `/profile/followers/${props.id}`;

	return (
		<div className={classes.item}>
			<NavLink to={path} className={classes.linkItem}>
				<div className={classes.linkImageContiner}>
					<img src={props.iconFollow} alt="icon_follower.png" />
				</div>
				<div className={classes.name}>{props.name}</div>
			</NavLink>
		</div>
	);
};

export default Follower;
