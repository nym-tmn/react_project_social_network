import { connect } from 'react-redux';

import EnterPosts from './Enter_posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';

const mapStateToProps = (state) => {

	return {
		profilePage: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (postText) => {
			dispatch(updateNewPostTextActionCreator(postText));
		},
	};
};

const EnterPostsContainer = connect(mapStateToProps, mapDispatchToProps)(EnterPosts);

export default EnterPostsContainer;
