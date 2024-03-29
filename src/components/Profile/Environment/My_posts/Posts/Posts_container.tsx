import { ConnectedProps, connect } from 'react-redux';

import Posts from './Posts';
import { AppStateType } from '../../../../../redux/redux_store';
import { PostsDataType } from '../../../../../types/types';
import { getPostsData/* , getSmallPhoto */ } from '../../../../../redux/profile_page_selectors';
import { actions } from '../../../../../redux/profile_page_reducer';

type mapStateToPropsType = {
	postsData: Array<PostsDataType>
	// smallPhoto?: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		postsData: getPostsData(state),
		// smallPhoto: getSmallPhoto(state),
	};
};

const connector = connect(mapStateToProps, {
	deletePost: actions.deletePostActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface PostsPropsType extends PropsFromRedux { }

export default connector(Posts);
