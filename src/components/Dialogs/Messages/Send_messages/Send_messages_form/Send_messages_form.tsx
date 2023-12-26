import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { SendMessagesPropsType } from '../Send_messages';

import classes from './Send_messages_form.module.css';

type SendMessageFormDataType = {
	newMessageText: string
}

const SendMessagesForm: React.FC<SendMessagesPropsType> = (props) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SendMessageFormDataType>({});

	const onSendMessage: SubmitHandler<SendMessageFormDataType> = (sendMessageFormData: SendMessageFormDataType) => {

		props.sendMessage(sendMessageFormData.newMessageText);
		reset();

	};

	return (
		<form
			className={classes.sendMessages}
			onSubmit={handleSubmit(onSendMessage)}>
			{errors.newMessageText?.message && <div className={classes.error}>{errors.newMessageText?.message}</div>}
			<textarea
				className={classes.enterMessage}
				placeholder={'Enter message...'}
				{...(register('newMessageText', {
					required: true,
					maxLength: {
						value: 5000,
						message: 'Max length is 5000 symbols',
					},
				}))}>
			</textarea>
			<button className={classes.send}>Send</button>
		</form>
	);
};

export default SendMessagesForm;
