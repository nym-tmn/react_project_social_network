import { connect } from 'react-redux';

import Posts from './Posts';
import { RootState } from '../../../../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		postsData: state.profilePage.postsData,
	};
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
