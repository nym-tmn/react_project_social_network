
import React from 'react';
import MessageToMe from './Message_to_me/Message_to_me';
import MessageFromMe from './Message_from_me/Message_from_me';
import SendMessages from './Send_messages/Send_messages';

import classes from './Messages.module.css';

const Messages = (props) => {

	let messagesToMeElements = props.messageToMe.messagesToMeData
		.map(message => <MessageToMe message={message.messageText} />);

	let messagesFromMeElements = props.messageFromMe.messagesFromMeData
		.map(message => <MessageFromMe message={message.messageText} />);

	return (
		<div className={classes.messages}>
			<div className={classes.messagesToMe}>
				{messagesToMeElements}
			</div>
			<div className={classes.messagesFromMe}>
				{messagesFromMeElements}
			</div>
			<SendMessages
				newMessageFromMe={props.messageFromMe.newMessageFromMe}
				dispatch={props.dispatch} />
		</div>
	);
}

export default Messages;