
import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/state';

import classes from './Send_messages.module.css';

const SendMessages = (props) => {

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	};

	let messageTextChange = () => {
		let messageText = newMessageElement.current.value;
		props.dispatch(updateMessageTextActionCreator(messageText));
	};

	return (
		<div className={classes.sendMessages}>
			<textarea ref={newMessageElement} onChange={messageTextChange} value={props.newMessageFromMe} className={classes.enterMessage} placeholder='Enter message...' cols="48" rows="4" />
			<button onClick={addMessage} className={classes.send}>Send</button>
		</div>
	);
}

export default SendMessages;