import { connect } from 'react-redux';

import Followings from './Followings';
import { RootState } from '../../../../../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		followingsData: state.profilePage.followingsData,
	};
};

const FollowingsContainer = connect(mapStateToProps)(Followings);

export default FollowingsContainer;
