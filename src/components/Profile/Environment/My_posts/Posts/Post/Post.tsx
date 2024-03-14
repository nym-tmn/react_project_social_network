import React from 'react';

import { PostsDataType } from '../../../../../../types/types';
import iconGarbage from '../../../../../images/icon_garbage.png';

import classes from './Post.module.css';

type PostPropsType = {
	deletePost: (postId: number) => void
}

const Post: React.FC<PostsDataType & PostPropsType> = (props) => {

	const onDeletePostClick = () => {
		props.deletePost(props.id);
	};

	return (
		<>
			<div className={classes.post}>
				<img className={classes.iconAvatar} src={props.postIconAvatar} alt="icon_avatar.png" />
				<div className={classes.userName}>{props.postUserName}</div>
				<div className={classes.postText}>{props.postText}</div>
				{props.postImage && <img className={classes.postImage} src={props.postImage} alt="imagePost" />}
				<div className={classes.likes}>
					<div className={classes.counter}>{props.likesCounter}</div>
					<div className={classes.heart}></div>
				</div>
				<button onClick={onDeletePostClick} className={classes.buttonDeletePost}>
					<img src={iconGarbage} alt="icon_garbage" />
				</button>
			</div>
		</>
	);
};

export default Post;
