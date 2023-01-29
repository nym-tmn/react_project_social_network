
import React from 'react';

import classes from './Message_from_me.module.css';

const MessageFromMe = (props) => {
	return (
		<div className={classes.messageFromMe}>
			<div><span className={classes.message}>{props.message}</span></div>
		</div>
	);
}

export default MessageFromMe;