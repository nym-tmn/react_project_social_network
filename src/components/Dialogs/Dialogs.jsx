
import React from 'react';
import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogItem from './Dialog_item/Dialog_item';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogItemElements = props.dialogItem.dialogItemData
		.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />);

	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages
				messageToMe={props.messageToMe}
				messageFromMe={props.messageFromMe}
				// addMessage={props.addMessage}
				// updateMessageText={props.updateMessageText}
				dispatch={props.dispatch} />
			<div className={classes.dialogItem}>
				{dialogItemElements}
			</div>
		</div>
	);
}

export default Dialogs;