import React from 'react';

import { EnterPostsPropsType } from './Enter_posts_container';

import classes from './Enter_posts.module.css';

const EnterPosts: React.FC<EnterPostsPropsType> = (props) => {

	const onAddPostClick = () => {
		props.addPost();
	};

	const onNewPostChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		const postText = event.target.value;
		props.updateNewPostText(postText);
	};

	return (
		<div className={classes.enterPosts}>
			<div className={classes.iconAvatar}>
				{/* <img src="/img/icon_avatar.png" alt="icon_avatar1.png" /> */}
			</div>
			<textarea
				onChange={onNewPostChange}
				value={props.newPostText}
				className={classes.whatIsNew}
				placeholder="What's new?" cols={50} rows={4} />
			<button onClick={onAddPostClick} className={classes.buttonSend}>Send</button>
		</div>
	);
};

export default EnterPosts;
