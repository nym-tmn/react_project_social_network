import { ConnectedProps, connect } from 'react-redux';

import EnterPosts from './Enter_posts';
import { actions } from '../../../../../redux/profile_page_reducer';
import { AppStateType } from '../../../../../redux/redux_store';
import { getSmallPhoto } from '../../../../../redux/profile_page_selectors';

type MapStateToPropsType = {
	smallPhoto: string | undefined
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		smallPhoto: getSmallPhoto(state),
	};
};

const connector = connect(mapStateToProps, {
	addPost: actions.addPostActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface EnterPostsPropsType extends PropsFromRedux { }

export default connector(EnterPosts);
