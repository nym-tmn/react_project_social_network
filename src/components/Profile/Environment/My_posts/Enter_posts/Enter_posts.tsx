import React from 'react';

import EnterPostForm from './Enter_posts_form/Enter_post_form';

import classes from './Enter_posts.module.css';

export type EnterPostsType = {
	addPost: (newPostText: string) => void
}

const EnterPosts: React.FC<EnterPostsType> = (props) => {

	return (
		<div className={classes.enterPosts}>
			<div className={classes.iconAvatar}>
			</div>
			<EnterPostForm addPost={props.addPost}/>
		</div>
	);
};

export default EnterPosts;
