import React from 'react';

import classes from './Send_messages.module.css';

const SendMessages = (props) => {

	const onSendMessageClick = () => {
		props.sendMessage();
	};

	const onNewMessageChange = (event) => {
		const messageText = event.target.value;
		props.updateNewMessageText(messageText);
	};

	return (
		<div className={classes.sendMessages}>
			<textarea
				onChange={onNewMessageChange}
				value={props.newMessageText}
				className={classes.enterMessage}
				placeholder='Enter message...'
				cols="48" rows="4" />
			<button onClick={onSendMessageClick} className={classes.send}>Send</button>
		</div>
	);
};

export default SendMessages;
