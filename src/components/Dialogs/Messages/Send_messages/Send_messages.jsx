
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs_page_reducer';

import classes from './Send_messages.module.css';

const SendMessages = (props) => {

	let newMessageFromMe = props.newMessageFromMe;

	let onSendMessageClick = () => {
		props.dispatch(sendMessageActionCreator());
	};

	let onNewMessageChange = (event) => {
		let messageText = event.target.value;
		props.dispatch(updateNewMessageTextActionCreator(messageText));
	};

	return (
		<div className={classes.sendMessages}>
			<textarea
				onChange={onNewMessageChange}
				value={newMessageFromMe}
				className={classes.enterMessage}
				placeholder='Enter message...'
				cols="48" rows="4" />
			<button onClick={onSendMessageClick} className={classes.send}>Send</button>
		</div>
	);
}

export default SendMessages;