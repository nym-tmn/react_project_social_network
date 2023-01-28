
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './../Dialog.module.css';

const Dialog1 = (props) => {
	return (
		<div className={`${classes.dialog} ${classes.activeDialog}`}>
			<div className={classes.avatar}></div>
			<div className={classes.name}>
				<NavLink to='/dialogs/1'>Robert_lastName</NavLink>
			</div>
		</div>
	);
}

export default Dialog1;