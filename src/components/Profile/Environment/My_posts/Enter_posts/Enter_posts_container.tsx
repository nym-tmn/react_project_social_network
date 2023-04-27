import { connect } from 'react-redux';

import EnterPosts from './Enter_posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';
import { AppDispatch, AppStateType } from '../../../../redux/redux-store';

type mapStateToPropsType = {
	profilePage: string
}

type mapDispatchToPropsType = {
	addPost: () => void
	updateNewPostText: (postText: string) => void
}

export type EnterPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		profilePage: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (postText: string) => {
			dispatch(updateNewPostTextActionCreator(postText));
		},
	};
};

const EnterPostsContainer = connect(mapStateToProps, mapDispatchToProps)(EnterPosts);

export default EnterPostsContainer;
