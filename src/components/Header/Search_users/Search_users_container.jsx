import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SearchUsers from './Search_users';
import {
	followActionCreator,
	setUsersActionCreator,
	unFollowActionCreator,
	setTotalCountUsersActionCreator,
	setCurrentPageActionCreator,
} from '../../redux/search_users_reducer';

const SearchUsersContainer = ({
	setUsers,
	setTotalCountUsers,
	setCurrentPage,
	currentPage,
	pageSize,
	totalCountUsers,
	usersData,
	unfollow,
	follow,
	isFetching,
}) => {

	useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
			setUsers(response.data.items);
			setTotalCountUsers(response.data.totalCount);
		});
	}, [currentPage, pageSize, setTotalCountUsers, setUsers]);

	const onPageChanged = (numberPage) => {
		setCurrentPage(numberPage);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${pageSize}`)
			.then((response) => {
			setUsers(response.data.items);
			setTotalCountUsers(response.data.totalCount);
		});
	};

	return (
		<SearchUsers
			totalCountUsers={totalCountUsers}
			pageSize={pageSize}
			onPageChanged={onPageChanged}
			currentPage={currentPage}
			usersData={usersData}
			unfollow={unfollow}
			follow={follow}
			isFetching={isFetching} />
	);
};

const mapStateToProps = (state) => {
	return {
		usersData: state.searchUsersPage.usersData,
		pageSize: state.searchUsersPage.pageSize,
		totalCountUsers: state.searchUsersPage.totalCountUsers,
		currentPage: state.searchUsersPage.currentPage,
		isFetching: state.searchUsersPage.isFetching,
	};
};

const mapDispatchToProps = (dispatch) => {
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersContainer);
