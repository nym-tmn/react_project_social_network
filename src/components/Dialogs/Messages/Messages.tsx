import React from 'react';

import MessageToMe from './Message_to_me/Message_to_me';
import MessageFromMe from './Message_from_me/Message_from_me';
import SendMessages from './Send_messages/Send_messages';
import { InitialStateType } from '../../redux/dialogs_page_reducer';

import classes from './Messages.module.css';

type MessagesPropsType = {
	sendMessage: () => void
	updateNewMessageText: (messageText: string) => void
	messages: InitialStateType
}

const Messages: React.FC<MessagesPropsType> = (props) => {

	const messagesToMeElements = props.messages.messagesToMeData
		.map(message => <MessageToMe key={message.id} message={message.messageText} />);

	const messagesFromMeElements = props.messages.messagesFromMeData
		.map(message => <MessageFromMe key={message.id} message={message.messageText} />);

	return (
		<div className={classes.messages}>
			<div className={classes.messagesText}>
				<div className={classes.messagesToMe}>
					{messagesToMeElements}
				</div>
				<div className={classes.messagesFromMe}>
					{messagesFromMeElements}
				</div>
			</div>
			<SendMessages
				newMessageText={props.messages.newMessageText}
				updateNewMessageText={props.updateNewMessageText}
				sendMessage={props.sendMessage} />
		</div>
	);
};

export default Messages;
