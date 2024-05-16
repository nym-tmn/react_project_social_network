import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Params } from 'react-router-dom';

import EnterPosts from './Enter_posts';
import { actions } from '../../../../../redux/profile_page_reducer';
import { AppStateType } from '../../../../../redux/redux_store';
import { getSmallPhoto } from '../../../../../redux/profile_page_selectors';

type MapStateToPropsType = {
	smallPhoto: string | undefined
}

export type EnterPostsContainerPropsType = {
	isOwner: Readonly<Params<string>>
	smallPhoto: string | undefined
	addPost: (newPostText: string) => {
		readonly type: 'SN/PROFILE_PAGE/ADD_POST'
		readonly newPostText: string
	}
}

const EnterPostsContainer: React.FC<EnterPostsContainerPropsType> = ({
	isOwner,
	addPost,
	smallPhoto,
}) => {
	return (
		<EnterPosts
			addPost={addPost}
			smallPhoto={smallPhoto}
			isOwner={isOwner}
		/>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		smallPhoto: getSmallPhoto(state),
	};
};

const connector = connect(mapStateToProps, {
	addPost: actions.addPostActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface EnterPostsPropsType extends PropsFromRedux { }

export default connector(EnterPostsContainer);
