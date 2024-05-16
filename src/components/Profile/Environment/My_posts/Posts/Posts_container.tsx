import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Params } from 'react-router-dom';

import Posts from './Posts';
import { AppStateType } from '../../../../../redux/redux_store';
import { PostsDataType } from '../../../../../types/types';
import { getPostsData, getSmallPhoto, getUserName } from '../../../../../redux/profile_page_selectors';
import { actions } from '../../../../../redux/profile_page_reducer';

type MapStateToPropsType = {
	postsData: Array<PostsDataType>
	smallPhoto: string | undefined
	userName: string | undefined
}

export type PostsContainerPropsType = {
	postsData: Array<PostsDataType>
	smallPhoto: string | undefined
	userName: string | undefined
	deletePost: (postId: number) => {
		readonly type: 'SN/PROFILE_PAGE/DELETE_POST'
		readonly postId: number
	}
	isOwner: Readonly<Params<string>>
}

const PostsContainer: React.FC<PostsContainerPropsType> = ({
	deletePost,
	postsData,
	smallPhoto,
	userName,
	isOwner,
}) => {

	return (
		<Posts
			postsData={postsData}
			smallPhoto={smallPhoto}
			userName={userName}
			deletePost={deletePost}
			isOwner={isOwner}
		/>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return {
		postsData: getPostsData(state),
		smallPhoto: getSmallPhoto(state),
		userName: getUserName(state),
	};
};

const connector = connect(mapStateToProps, {
	deletePost: actions.deletePostActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface PostsPropsType extends PropsFromRedux { }

export default connector(PostsContainer);
