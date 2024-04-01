import React from 'react';

import EnterPostForm from './Enter_posts_form/Enter_post_form';
import avatarIcon from '../../../../../assets/images/avatar_icon.png';

import classes from './Enter_posts.module.css';

export type EnterPostsType = {
	addPost: (newPostText: string) => void
	smallPhoto: string | undefined
}

const EnterPosts: React.FC<EnterPostsType> = (props) => {

	return (
		<div className={classes.enterPosts}>
			<img className={classes.iconAvatar} src={props.smallPhoto || avatarIcon} alt="avatar_icon.png" />
			<EnterPostForm addPost={props.addPost} />
		</div>
	);
};

export default EnterPosts;
