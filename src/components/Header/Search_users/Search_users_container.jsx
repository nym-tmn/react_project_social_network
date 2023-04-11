
import SearchUsers from './Search_users';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unFollowActionCreator, setTotalCountUsersActionCreator, setCurrentPageActionCreator } from '../../redux/search_users_reducer';

let mapStateToProps = (state) => {

	return {
		usersData: state.searchUsersPage.usersData,
		pageSize: state.searchUsersPage.pageSize,
		totalCountUsers: state.searchUsersPage.totalCountUsers,
		currentPage: state.searchUsersPage.currentPage,
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
		setTotalCountUsers: (totalCount) => {
			dispatch(setTotalCountUsersActionCreator(totalCount));
		},
		setCurrentPage: (numberPage) => {
			dispatch(setCurrentPageActionCreator(numberPage));
		},
	}
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers);

export default SearchUsersContainer;