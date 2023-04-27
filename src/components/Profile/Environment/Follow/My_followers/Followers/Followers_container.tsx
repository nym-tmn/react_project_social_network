import { connect } from 'react-redux';

import Followers from './Followers';
import { AppStateType } from '../../../../../redux/redux-store';
import { FollowersDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	followersData: Array<FollowersDataType>
}

export type FollowersPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		followersData: state.profilePage.followersData,
	};
};

const FollowersContainer = connect(mapStateToProps)(Followers);

export default FollowersContainer;
