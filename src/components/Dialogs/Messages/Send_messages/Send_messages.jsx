
import React from 'react';

import classes from './Send_messages.module.css';

const SendMessages = (props) => {

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let message = newMessageElement.current.value;
		alert(message);
	}

	return (
		<div className={classes.sendMessages}>
			<textarea ref={newMessageElement} className={classes.enterMessage} placeholder='Enter message...' cols="48" rows="4"></textarea>
			<button onClick={addMessage} className={classes.send}>Send</button>
		</div>
	);
}

export default SendMessages;