
import React from 'react';
import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogItem from './Dialog_item/Dialog_item';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogsData = [
		{ id: 1, name: 'Robert_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 2, name: 'Sophia_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 3, name: 'Alex_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 4, name: 'Andrew_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 5, name: 'John_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 6, name: 'Mary_lastName', avatar: require('./../images/dialog_avatar.png') },
	];

	let dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);

	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages />
			<div className={classes.dialogItem}>
				{dialogsElements}
			</div>
		</div>
	);
}

export default Dialogs;