import React from 'react';
import { Params } from 'react-router-dom';

import { PostsDataType } from '../../../../../../types/types';
import iconGarbage from '../../../../../images/icon_garbage.png';
import avatarIcon from '../../../../../../assets/images/avatar_icon.png';

import classes from './Post.module.css';

type PostPropsType = {
	deletePost: (postId: number) => void
	smallPhoto: string | undefined
	isOwner: Readonly<Params<string>>
}

const Post: React.FC<PostsDataType & PostPropsType> = (props) => {

	const onDeletePostClick = () => {
		props.deletePost(props.id);
	};

	return (
		<>
			<div className={classes.post}>
				<img className={classes.iconAvatar} src={props.smallPhoto || avatarIcon} alt="avatar_icon.png" />
				<div className={classes.userName}>{props.postUserName}</div>
				<div className={classes.postText}>{props.postText}</div>
				{props.postImage && <img className={classes.postImage} src={props.postImage} alt="imagePost" />}
				<div className={classes.likes}>
					<div className={classes.counter}>{props.likesCounter}</div>
					<div className={classes.heart}></div>
				</div>
				{!props.isOwner.userId && <button onClick={onDeletePostClick} className={classes.buttonDeletePost}>
					<img src={iconGarbage} alt="icon_garbage" />
				</button>}
			</div>
		</>
	);
};

export default Post;
