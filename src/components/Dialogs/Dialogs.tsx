import React from 'react';

import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogItem from './Dialog_item/Dialog_item';
import { InitialStateType } from '../redux/dialogs_page_reducer';

import classes from './Dialogs.module.css';

type DialogsPropsType = {
	dialogsPage: InitialStateType
	sendMessage: () => void
	updateNewMessageText: (messageText: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

	const dialogItemElements = props.dialogsPage.dialogItemData
		.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar} />);

	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages
				messages={props.dialogsPage}
				updateNewMessageText={props.updateNewMessageText}
				sendMessage={props.sendMessage} />
			<div className={classes.dialogItem}>
				{dialogItemElements}
			</div>
		</div>
	);
};

export default Dialogs;
