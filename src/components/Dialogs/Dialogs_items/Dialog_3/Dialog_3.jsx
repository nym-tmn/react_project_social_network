
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './../Dialog.module.css';

const Dialog3 = (props) => {
	return (
		<div className={classes.dialog}>
			<div className={classes.avatar}></div>
			<div className={classes.name}>
				<NavLink to='/dialogs/3'>Alex_lastName</NavLink>
			</div>
		</div>
	);
}

export default Dialog3;