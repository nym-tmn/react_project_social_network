import React from 'react';

import MessageToMe from './Message_to_me/Message_to_me';
import MessageFromMe from './Message_from_me/Message_from_me';
import SendMessages from './Send_messages/Send_messages';
import { DialogsPropsType } from '../Dialogs_container';

import classes from './Messages.module.css';

const Messages: React.FC<DialogsPropsType> = (props) => {

	const messagesToMeElements = props.dialogsPage.messagesToMeData
		.map(message => <MessageToMe key={message.id} id={message.id} messageText={message.messageText} />);

	const messagesFromMeElements = props.dialogsPage.messagesFromMeData
		.map(message => <MessageFromMe key={message.id} id={message.id} messageText={message.messageText} />);

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
			<SendMessages sendMessage={props.sendMessage} />
		</div>
	);
};

export default Messages;
