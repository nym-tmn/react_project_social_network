
import React from 'react';

import classes from './Dialogs_items.module.css';

const DialogsItems = (props) => {
	return (
		<div className={classes.dialogsItems}>
			<div className={`${classes.dialog} ${classes.activeDialog}`}>
				<div className={classes.avatar}></div>
				<div className={classes.name}><a href='#s'>Robert_lastName</a></div>
			</div>
			<div className={classes.dialog}>
				<div className={classes.avatar}></div>
				<div className={classes.name}><a href='#s'>Sophia_lastName</a></div>
			</div>
			<div className={classes.dialog}>
				<div className={classes.avatar}></div>
				<div className={classes.name}><a href='#s'>Alex_lastName</a></div>
			</div>
			<div className={classes.dialog}>
				<div className={classes.avatar}></div>
				<div className={classes.name}><a href='#s'>Andrew_lastName</a></div>
			</div>
			<div className={classes.dialog}>
				<div className={classes.avatar}></div>
				<div className={classes.name}><a href='#s'>John_lastName</a></div>
			</div>
			<div className={classes.dialog}>
				<div className={classes.avatar}></div>
				<div className={classes.name}><a href='#s'>Mary_lastName</a></div>
			</div>
		</div>
	);
}

export default DialogsItems;