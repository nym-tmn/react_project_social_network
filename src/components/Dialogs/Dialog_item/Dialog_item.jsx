
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Dialog_item.module.css';

const DialogItem = (props) => {

	let path = '/dialogs/' + props.id;

	return (
		<div className={classes.dialog}>
			<img className={classes.avatar} src={props.avatar} alt="dialog_avatar.png" />
			<div className={classes.name}>
				<NavLink to={path} className={({ isActive }) => isActive ? classes.active : ''}>{props.name}</NavLink>
			</div>
		</div>
	);
}

export default DialogItem;