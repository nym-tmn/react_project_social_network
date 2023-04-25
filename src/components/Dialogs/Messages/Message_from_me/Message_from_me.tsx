import React from 'react';

import classes from './Message_from_me.module.css';

type MessageFromMePropsType = {
	message: string
}

const MessageFromMe: React.FC<MessageFromMePropsType> = (props) => {

	return (
		<div className={classes.messageFromMe}>
			<div><span className={classes.message}>{props.message}</span></div>
		</div>
	);
};

export default MessageFromMe;
