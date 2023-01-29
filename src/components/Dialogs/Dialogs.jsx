
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

	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages />
			<div className={classes.dialogItem}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} avatar={dialogsData[0].avatar} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} avatar={dialogsData[1].avatar} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} avatar={dialogsData[2].avatar} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} avatar={dialogsData[3].avatar} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} avatar={dialogsData[4].avatar} />
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} avatar={dialogsData[5].avatar} />
			</div>
		</div>
	);
}

export default Dialogs;