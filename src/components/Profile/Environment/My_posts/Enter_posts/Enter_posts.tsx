import React from 'react';

import EnterPostForm from './Enter_posts_form/Enter_post_form';
import avatarIcon from '../../../../../assets/images/avatar_icon.png';
import { EnterPostsContainerPropsType } from './Enter_posts_container';

import classes from './Enter_posts.module.css';

const EnterPosts: React.FC<EnterPostsContainerPropsType> = (props) => {

	return (
		<>
			{!props.isOwner.userId && <div className={classes.enterPosts}>
				<img className={classes.iconAvatar} src={props.smallPhoto || avatarIcon} alt="avatar_icon.png" />
				<EnterPostForm addPost={props.addPost} />
			</div>}
		</>
	);
};

export default EnterPosts;
