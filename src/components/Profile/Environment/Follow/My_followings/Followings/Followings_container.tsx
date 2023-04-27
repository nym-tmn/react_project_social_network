import { connect } from 'react-redux';

import Followings from './Followings';
import { AppStateType } from '../../../../../redux/redux-store';
import { FollowingsDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	followingsData: Array<FollowingsDataType>
}

export type FollowingsPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		followingsData: state.profilePage.followingsData,
	};
};

const FollowingsContainer = connect(mapStateToProps)(Followings);

export default FollowingsContainer;
