import { ConnectedProps, connect } from 'react-redux';

import Followings from './Followings';
import { AppStateType } from '../../../../../../redux/redux-store';
import { FollowingsDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	followingsData: Array<FollowingsDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		followingsData: state.profilePage.followingsData,
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface FollowingsPropsType extends PropsFromRedux { }

export default connector(Followings);
