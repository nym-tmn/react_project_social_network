import React from 'react';

import SendMessagesForm from './Send_messages_form/Send_messages_form';

export type SendMessagesPropsType = {
	sendMessage: (newMessageText: string) => void
}

const SendMessages: React.FC<SendMessagesPropsType> = (props) => {

	return (
		<SendMessagesForm sendMessage={props.sendMessage} />
	);
};

export default SendMessages;
