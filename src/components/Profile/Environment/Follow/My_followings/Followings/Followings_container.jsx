import { connect } from 'react-redux';

import Followings from './Followings';

const mapStateToProps = (state) => {

	return {
		followingsData: state.profilePage.followingsData,
	};
};

const FollowingsContainer = connect(mapStateToProps)(Followings);

export default FollowingsContainer;
