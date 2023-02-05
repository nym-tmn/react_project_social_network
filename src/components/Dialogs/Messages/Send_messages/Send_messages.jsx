
import React from 'react';

import classes from './Send_messages.module.css';

const SendMessages = (props) => {

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.addMessage();
	};

	let messageTextChange = () => {
		let messageText = newMessageElement.current.value;
		props.updateMessageText(messageText);
	};

	return (
		<div className={classes.sendMessages}>
			<textarea ref={newMessageElement} onChange={messageTextChange} value={props.newMessageFromMe} className={classes.enterMessage} placeholder='Enter message...' cols="48" rows="4"/>
			<button onClick={addMessage} className={classes.send}>Send</button>
		</div>
	);
}

export default SendMessages;