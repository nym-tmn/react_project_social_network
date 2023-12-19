import React from 'react';
import { Form } from 'react-final-form';

import SendMessagesForm from './Send_messages_form/Send_messages_form';

type SendMessagesPropsType = {
	sendMessage: (newMessageText: string) => void
}

export type MessageFormDataType = {
	newMessageText: string
}

const SendMessages: React.FC<SendMessagesPropsType> = (props) => {

	const onSendMessage = (messageFormData: MessageFormDataType) => {

		props.sendMessage(messageFormData.newMessageText);
	};

	return (
			<Form
				onSubmit={onSendMessage}
				render={({
					handleSubmit,
					values,
					// form,
					submitting,
					pristine,
				}) => (
					<SendMessagesForm
						handleSubmit={handleSubmit}
						values={values}
						// form={form}
						submitting={submitting}
						pristine={pristine}
					/>
				)} />
	);
};

export default SendMessages;
