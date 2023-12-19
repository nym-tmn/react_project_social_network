import React from 'react';
import { Form } from 'react-final-form';

import { EnterPostsPropsType } from './Enter_posts_container';
import EnterPostsForm from './Enter_posts_form/Enter_posts_form';

import classes from './Enter_posts.module.css';

export type PostFormDataType = {
	newPostText: string
}

const EnterPosts: React.FC<EnterPostsPropsType> = (props) => {

	const onAddPost = (postFormData: PostFormDataType) => {

		props.addPost(postFormData.newPostText);

	};

	return (
		<div className={classes.enterPosts}>
			<div className={classes.iconAvatar}>
			</div>
			<Form onSubmit={onAddPost}
				render={({
					handleSubmit,
					values,
					// form,
					submitting,
					pristine,
				}) => (
					<EnterPostsForm
						handleSubmit={handleSubmit}
						values={values}
						// form={form}
						submitting={submitting}
						pristine={pristine}
					/>
				)} />
		</div>
	);
};

export default EnterPosts;
