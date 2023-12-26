import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import classes from './Enter_post_form.module.css';
import { EnterPostsType } from '../Enter_posts';

export type PostFormDataType = {
	newPostText: string
}

const EnterPostForm: React.FC<EnterPostsType> = (props) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<PostFormDataType>({});

	const onAddPost: SubmitHandler<PostFormDataType> = (postFormData: PostFormDataType) => {

		props.addPost(postFormData.newPostText);
		reset();

	};

	return (
			<form
				className={classes.enterPostsForm}
				onSubmit={handleSubmit(onAddPost)}>
				{errors.newPostText?.message && <div className={classes.error}>{errors.newPostText?.message}</div>}
				<textarea
					className={classes.whatIsNew}
					placeholder={"What's new?"}
				{...(register('newPostText', {
						required: true,
						maxLength: {
							value: 5000,
							message: 'Max length is 5000 symbols',
						},
					}))}>
				</textarea>
				<button className={classes.buttonSend}>Send</button>
			</form>
	);
};

export default EnterPostForm;
