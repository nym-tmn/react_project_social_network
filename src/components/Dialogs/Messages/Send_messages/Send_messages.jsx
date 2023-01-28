
import React from 'react';

import classes from './Send_messages.module.css';

const SendMessages = (props) => {
	return (
		<div className={classes.sendMessages}>
			<textarea className={classes.enterMessage} placeholder='Enter message...' cols="50" rows="4"></textarea>
			<button className={classes.send}>Send</button>
		</div>
	);
}

export default SendMessages;