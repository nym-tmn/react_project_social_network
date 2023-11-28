import { ConnectedProps, connect } from 'react-redux';

import Posts from './Posts';
import { AppStateType } from '../../../../../redux/redux_store';
import { PostsDataType } from '../../../../../types/types';

type mapStateToPropsType = {
	postsData: Array<PostsDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		postsData: state.profilePage.postsData,
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface PostsPropsType extends PropsFromRedux { }

export default connector(Posts);
