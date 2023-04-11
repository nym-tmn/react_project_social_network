
import React from 'react';
import axios from 'axios';
import SearchUsers from './Search_users';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unFollowActionCreator, setTotalCountUsersActionCreator, setCurrentPageActionCreator } from '../../redux/search_users_reducer';

class SearchUsersContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalCountUsers(response.data.totalCount);
		});
	};

	onPageChanged = (numberPage) => {
		this.props.setCurrentPage(numberPage);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalCountUsers(response.data.totalCount);
		});
	};

	render() {

		return (
			<SearchUsers
				totalCountUsers={this.props.totalCountUsers}
				pageSize={this.props.pageSize}
				onPageChanged={this.onPageChanged}
				currentPage={this.props.currentPage}
				usersData={this.props.usersData}
				unfollow={this.props.unfollow}
				follow={this.props.follow} />
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersContainer);