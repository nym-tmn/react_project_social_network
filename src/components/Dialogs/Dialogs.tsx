import React from 'react';

import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogItem from './Dialog_item/Dialog_item';
import { DialogsPropsType } from './Dialogs_container';

import classes from './Dialogs.module.css';

const Dialogs: React.FC<DialogsPropsType> = (props) => {

	const dialogItemElements = props.dialogsPage.dialogItemData
		.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar} />);

	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages
				dialogsPage={props.dialogsPage}
				updateNewMessageText={props.updateNewMessageText}
				sendMessage={props.sendMessage} />
			<div className={classes.dialogItem}>
				{dialogItemElements}
			</div>
		</div>
	);
};

export default Dialogs;
