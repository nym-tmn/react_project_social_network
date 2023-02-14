
import React from 'react';

import classes from './../Enter_posts/Enter_posts.module.css';

const EnterPosts = (props) => {

	let onAddPostClick = () => {
		props.addPost();
	};

	let onNewPostChange = (event) => {
		let postText = event.target.value;
		props.updateNewPostText(postText);
	};

	return (
		<div className={classes.enterPosts}>
			<div className={`${classes.iconAvatar} ${classes.iconAvatar}`}>
				<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
			</div>
			<textarea
				onChange={onNewPostChange}
				value={props.newPostText}
				className={classes.whatIsNew}
				placeholder="What's new?" cols="50" rows="4" />
			<button onClick={onAddPostClick} className={classes.buttonSend}>Send</button>
		</div>
	);
};

export default EnterPosts;