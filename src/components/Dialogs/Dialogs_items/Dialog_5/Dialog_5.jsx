
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './../Dialog.module.css';

const Dialog5 = (props) => {
	return (
		<div className={classes.dialog}>
			<div className={classes.avatar}></div>
			<div className={classes.name}>
				<NavLink to='/dialogs/5'>John_lastName</NavLink>
			</div>
		</div>
	);
}

export default Dialog5;