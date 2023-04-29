import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from 'redux';

import EnterPosts from './Enter_posts';
import { ActionsTypes, actions } from '../../../../redux/profile_page_reducer';
import { AppStateType } from '../../../../redux/redux-store';

type mapStateToPropsType = {
	profilePage: string
}

type mapDispatchToPropsType = {
	addPost: () => void
	updateNewPostText: (postText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		profilePage: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): mapDispatchToPropsType => {
	return {
		addPost: () => {
			dispatch(actions.addPostActionCreator());
		},
		updateNewPostText: (postText: string) => {
			dispatch(actions.updateNewPostTextActionCreator(postText));
		},
	};
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface EnterPostsPropsType extends PropsFromRedux { }

export default connector(EnterPosts);
