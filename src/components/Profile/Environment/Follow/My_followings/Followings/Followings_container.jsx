
import Followings from './Followings';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		followingsData: state.profilePage.followingsData,
	}
};

const FollowingsContainer =  connect(mapStateToProps)(Followings);

export default FollowingsContainer;