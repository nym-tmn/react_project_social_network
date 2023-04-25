import React from 'react';

import classes from './Enter_posts.module.css';

type EnterPostsPropsType = {
	addPost: () => void
	updateNewPostText: (postText: string) => void
	profilePage: string
}

const EnterPosts: React.FC<EnterPostsPropsType> = (props) => {

	// console.log(props.profilePage);

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
				value={props.profilePage}
				className={classes.whatIsNew}
				placeholder="What's new?" cols={50} rows={4} />
			<button onClick={onAddPostClick} className={classes.buttonSend}>Send</button>
		</div>
	);
};

export default EnterPosts;
