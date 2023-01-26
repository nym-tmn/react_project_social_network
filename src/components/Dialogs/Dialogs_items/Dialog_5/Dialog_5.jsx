
import React from 'react';

import classes from './../Dialog.module.css';

const Dialog5 = (props) => {
	return (
		<div className={classes.dialog}>
			<div className={classes.avatar}></div>
			<div className={classes.name}><a href='#s'>John_lastName</a></div>
		</div>
	);
}

export default Dialog5;