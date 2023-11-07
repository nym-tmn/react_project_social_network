import { ConnectedProps, connect } from 'react-redux';

import Followers from './Followers';
import { AppStateType } from '../../../../../../redux/redux-store';
import { FollowersDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	followersData: Array<FollowersDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		followersData: state.profilePage.followersData,
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface FollowersPropsType extends PropsFromRedux { }

export default connector(Followers);
