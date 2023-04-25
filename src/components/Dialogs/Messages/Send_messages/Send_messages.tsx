import React from 'react';

import classes from './Send_messages.module.css';

type SendMessagesPropsType = {
	sendMessage: () => void
	updateNewMessageText: (messageText: string) => void
	newMessageText: string
}

const SendMessages: React.FC<SendMessagesPropsType> = (props) => {

	const onSendMessageClick = () => {
		props.sendMessage();
	};

	const onNewMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

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
				cols={48} rows={4} />
			<button onClick={onSendMessageClick} className={classes.send}>Send</button>
		</div>
	);
};

export default SendMessages;
