
import React from 'react';

import classes from './../Enter_posts/Enter_posts.module.css';

const EnterPosts = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	let postTextChange = () => {
		let postText = newPostElement.current.value;
		props.updatePostText(postText);
	};

	return (
		<div className={classes.enterPosts}>
			<div className={`${classes.iconAvatar} ${classes.iconAvatar}`}>
				<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
			</div>
			<textarea ref={newPostElement} onChange={postTextChange} value={props.newPostText} className={classes.whatIsNew} placeholder="What's new?" cols="50" rows="4" />
			<button onClick={addPost} className={classes.buttonSend}>Send</button>
		</div>
	);
};

export default EnterPosts;