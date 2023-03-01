
import SearchUsers from './Search_users';
import { connect } from 'react-redux';
import { followActionCreator, loadUsersActionCreator, unFollowActionCreator } from '../../redux/search_users_reducer';

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
		loadUsers: (users) => {
			dispatch(loadUsersActionCreator(users));
		},
	}
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers);

export default SearchUsersContainer;