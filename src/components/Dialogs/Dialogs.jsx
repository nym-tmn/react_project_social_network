
import React from 'react';
import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogsItems from './Dialogs_items/Dialogs_items';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<Title />
			<Messages />
			<DialogsItems />
		</div>
	);
}

export default Dialogs;