
import SearchUsers from './Search_users';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from '../../redux/search_users_reducer';

let mapStateToProps = (state) => {

	return {
		usersData: state.searchUsersPage.usersData,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId));
		},
		unfollow: (userId) => {
			dispatch(unFollowActionCreator(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		},
	}
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers);

export default SearchUsersContainer;