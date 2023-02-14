
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';
import EnterPosts from './Enter_posts';

const EnterPostsContainer = (props) => {

	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let updateNewPostText = (postText) => {
		let action = updateNewPostTextActionCreator(postText);
		props.store.dispatch(action);
	};

	return (
		<EnterPosts updateNewPostText={updateNewPostText} addPost={addPost} newPostText={state.profilePage.newPostText} />
	);
};

export default EnterPostsContainer;