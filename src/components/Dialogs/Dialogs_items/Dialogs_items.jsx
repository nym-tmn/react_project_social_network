
import React from 'react';
import Dialog1 from './Dialog_1/Dialog_1';
import Dialog2 from './Dialog_2/Dialog_2';
import Dialog3 from './Dialog_3/Dialog_3';
import Dialog4 from './Dialog_4/Dialog_4';
import Dialog5 from './Dialog_5/Dialog_5';
import Dialog6 from './Dialog_6/Dialog_6';

import classes from './Dialogs_items.module.css';

const DialogsItems = (props) => {
	return (
		<div className={classes.dialogsItems}>
			<Dialog1 />
			<Dialog2 />
			<Dialog3 />
			<Dialog4 />
			<Dialog5 />
			<Dialog6 />
		</div>
	);
}

export default DialogsItems;