import { ConnectedProps, connect } from 'react-redux';

import EnterPosts from './Enter_posts';
import { actions } from '../../../../../redux/profile_page_reducer';
import { AppStateType } from '../../../../../redux/redux-store';

type mapStateToPropsType = {
	newPostText: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		newPostText: state.profilePage.newPostText,
	};
};

const connector = connect(mapStateToProps, {
	addPost: actions.addPostActionCreator,
	updateNewPostText: actions.updateNewPostTextActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface EnterPostsPropsType extends PropsFromRedux { }

export default connector(EnterPosts);
