
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './../Dialog.module.css';

const Dialog2 = (props) => {
	return (
		<div className={classes.dialog}>
			<div className={classes.avatar}></div>
			<div className={classes.name}>
				<NavLink to='/dialogs/2'>Sophia_lastName</NavLink>
			</div>
		</div>
	);
}

export default Dialog2;