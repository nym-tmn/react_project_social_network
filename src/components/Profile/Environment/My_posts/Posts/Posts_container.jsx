
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData
	}
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;