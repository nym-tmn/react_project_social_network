import React, { SyntheticEvent } from 'react';
import { Field } from 'react-final-form';
// import { FormApi } from 'final-form';

import { MessageFormDataType } from '../Send_messages';

import classes from './Send_messages_form.module.css';

type SendMessagesPropsType = {
	handleSubmit: (event?: Partial<Pick<SyntheticEvent<Element, Event>, 'preventDefault' | 'stopPropagation'>> | undefined) => Promise<any> | undefined
	values: MessageFormDataType
	// form: FormApi<MessageFormDataType>
	submitting: boolean
	pristine: boolean
}

const SendMessagesForm: React.FC<SendMessagesPropsType> = (props) => {

	return (
		<form className={classes.sendMessages} onSubmit={props.handleSubmit}>
				<Field className={classes.enterMessage} component={'textarea'} name={'newMessageText'} placeholder={'Enter message...'} cols={48} rows={4} />
				<button className={classes.send} disabled={props.submitting || props.pristine} /* onClick={props.form.reset} */>Send</button>
		</form>
	);
};

export default SendMessagesForm;
