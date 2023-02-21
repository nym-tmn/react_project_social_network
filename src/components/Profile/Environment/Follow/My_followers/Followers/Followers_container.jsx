
import Followers from './Followers';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		followersData: state.profilePage.followersData
	}
};

const FollowersContainer = connect(mapStateToProps)(Followers);

export default FollowersContainer;