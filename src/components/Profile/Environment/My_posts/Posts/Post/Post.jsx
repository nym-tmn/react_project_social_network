import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {

	return (
		<div className={classes.post}>
			<img className={classes.IconAvatar} src={props.postIconAvatar} alt="icon_avatar.png" />
			<div className={classes.UserName}>{props.postUserName}</div>
			<div className={classes.Text}>{props.postText}</div>
			<img className={classes.Image} src={props.postImage} alt="imagePost" />
			<div className={classes.likes}>
				<div className={classes.counter}>{props.likesCounter}</div>
				<div className={classes.heart}></div>
			</div>
		</div>
	);
};

export default Post;
