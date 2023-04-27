import React from 'react';

import { MessagesDataType } from '../../../../types/types';

import classes from './Message_from_me.module.css';

const MessageFromMe: React.FC<MessagesDataType> = (props) => {

	return (
		<div className={classes.messageFromMe}>
			<div><span className={classes.message}>{props.messageText}</span></div>
		</div>
	);
};

export default MessageFromMe;
