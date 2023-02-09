
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';

import classes from './../Enter_posts/Enter_posts.module.css';

const EnterPosts = (props) => {

	let newPostText = props.newPostText;

	let onAddPostClick = () => {
		props.dispatch(addPostActionCreator());
	};

	let onNewPostChange = (event) => {
		let postText = event.target.value;
		props.dispatch(updateNewPostTextActionCreator(postText));
	};

	return (
		<div className={classes.enterPosts}>
			<div className={`${classes.iconAvatar} ${classes.iconAvatar}`}>
				<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
			</div>
			<textarea
				onChange={onNewPostChange}
				value={newPostText}
				className={classes.whatIsNew}
				placeholder="What's new?" cols="50" rows="4" />
			<button onClick={onAddPostClick} className={classes.buttonSend}>Send</button>
		</div>
	);
};

export default EnterPosts;