import React from 'react';

import { MessagesDataType } from '../../../../types/types';

import classes from './Message_to_me.module.css';

const MessageToMe: React.FC<MessagesDataType> = (props) => {

	return (
		<div className={classes.messageToMe}>
			<div><span className={classes.message}>{props.messageText}</span></div>
		</div>
	);
};

export default MessageToMe;
