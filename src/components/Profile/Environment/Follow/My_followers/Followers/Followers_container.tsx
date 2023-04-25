import { connect } from 'react-redux';

import Followers from './Followers';
import { RootState } from '../../../../../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		followersData: state.profilePage.followersData,
	};
};

const FollowersContainer = connect(mapStateToProps)(Followers);

export default FollowersContainer;
