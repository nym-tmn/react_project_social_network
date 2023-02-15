
import React from 'react';
import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogItem from './Dialog_item/Dialog_item';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogItemElements = props.dialogs.dialogItemData
		.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />);

	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages
				dialogs={props.dialogs}
				updateNewMessageText={props.updateNewMessageText}
				sendMessage={props.sendMessage} />
			<div className={classes.dialogItem}>
				{dialogItemElements}
			</div>
		</div>
	);
}

export default Dialogs;