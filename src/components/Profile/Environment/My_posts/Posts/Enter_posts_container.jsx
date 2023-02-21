
import EnterPosts from '../Enter_posts/Enter_posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

	return {
		profilePage: state.profilePage.newPostText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (postText) => {
			dispatch(updateNewPostTextActionCreator(postText));
		}
	}
};

const EnterPostsContainer = connect(mapStateToProps, mapDispatchToProps)(EnterPosts);

export default EnterPostsContainer;