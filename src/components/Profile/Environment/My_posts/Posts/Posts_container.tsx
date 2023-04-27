import { connect } from 'react-redux';

import Posts from './Posts';
import { AppStateType } from '../../../../redux/redux-store';
import { PostsDataType } from '../../../../../types/types';

type mapStateToPropsType = {
	postsData: Array<PostsDataType>
}

export type PostsPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		postsData: state.profilePage.postsData,
	};
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
