import { ConnectedProps, connect } from 'react-redux';

import Followings from './Followings';
import { AppStateType } from '../../../../../../redux/redux_store';
import { FollowDataType } from '../../../../../../types/types';
import { getFollowingsData } from '../../../../../../redux/profile_page_selectors';

type mapStateToPropsType = {
	followingsData: Array<FollowDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		followingsData: getFollowingsData(state),
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface FollowingsPropsType extends PropsFromRedux { }

export default connector(Followings);
