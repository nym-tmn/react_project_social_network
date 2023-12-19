import { ConnectedProps, connect } from 'react-redux';

import EnterPosts from './Enter_posts';
import { actions } from '../../../../../redux/profile_page_reducer';

const connector = connect(null, {
	addPost: actions.addPostActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface EnterPostsPropsType extends PropsFromRedux { }

export default connector(EnterPosts);
