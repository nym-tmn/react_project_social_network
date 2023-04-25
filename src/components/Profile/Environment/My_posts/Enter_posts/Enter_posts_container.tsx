import { connect } from 'react-redux';

import EnterPosts from './Enter_posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';
import { AppDispatch, RootState } from '../../../../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		profilePage: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
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
