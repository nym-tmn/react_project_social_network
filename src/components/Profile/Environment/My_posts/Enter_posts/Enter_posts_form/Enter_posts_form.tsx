import React, { SyntheticEvent } from 'react';
import { Field } from 'react-final-form';
// import { FormApi } from 'final-form';

import { PostFormDataType } from '../Enter_posts';

import classes from './Enter_posts_form.module.css';

type EnterPostsFormPropsType = {
	handleSubmit: (event?: Partial<Pick<SyntheticEvent<Element, Event>, 'preventDefault' | 'stopPropagation'>> | undefined) => Promise<any> | undefined
	values: PostFormDataType
	// form: FormApi<PostFormDataType>
	submitting: boolean
	pristine: boolean
}

const EnterPostsForm: React.FC<EnterPostsFormPropsType> = (props) => {

	return (
		<form className={classes.enterPostsForm} onSubmit={props.handleSubmit}>
			<div className={classes.textareaGrid}>
				<Field className={classes.whatIsNew} component={'textarea'} name={'newPostText'} placeholder={"What's new?"} cols={50} rows={4} />
			</div>
			<div className={classes.buttonGrid}>
				<button className={classes.buttonSend} disabled={props.submitting || props.pristine} /* onClick={props.form.reset} */>
					Send
				</button>
			</div>
		</form>
	);
};

export default EnterPostsForm;
