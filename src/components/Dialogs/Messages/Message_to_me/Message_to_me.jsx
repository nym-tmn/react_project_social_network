import React from 'react';

import classes from './Message_to_me.module.css';

const MessageToMe = (props) => {

	return (
		<div className={classes.messageToMe}>
			<div><span className={classes.message}>{props.message}</span></div>
		</div>
	);
};

export default MessageToMe;
