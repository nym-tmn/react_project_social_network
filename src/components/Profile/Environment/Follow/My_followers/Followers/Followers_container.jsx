import { connect } from 'react-redux';

import Followers from './Followers';

const mapStateToProps = (state) => {

	return {
		followersData: state.profilePage.followersData,
	};
};

const FollowersContainer = connect(mapStateToProps)(Followers);

export default FollowersContainer;
