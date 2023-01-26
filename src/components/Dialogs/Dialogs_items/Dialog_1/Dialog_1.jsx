
import React from 'react';

import classes from './../Dialog.module.css';

const Dialog1 = (props) => {
	return (
		<div className={`${classes.dialog} ${classes.activeDialog}`}>
			<div className={classes.avatar}></div>
			<div className={classes.name}><a href='#s'>Robert_lastName</a></div>
		</div>
	);
}

export default Dialog1;