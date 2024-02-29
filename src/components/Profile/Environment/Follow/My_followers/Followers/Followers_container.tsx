import { ConnectedProps, connect } from 'react-redux';

import Followers from './Followers';
import { AppStateType } from '../../../../../../redux/redux_store';
import { FollowDataType } from '../../../../../../types/types';
import { getFollowersData } from '../../../../../../redux/profile_page_selectors';

type mapStateToPropsType = {
	followersData: Array<FollowDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		followersData: getFollowersData(state),
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface FollowersPropsType extends PropsFromRedux { }

export default connector(Followers);
