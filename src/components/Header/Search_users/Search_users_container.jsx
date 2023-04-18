import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SearchUsers from './Search_users';
import {
	followActionCreator,
	setUsersActionCreator,
	unFollowActionCreator,
	setTotalUsersCountActionCreator,
	setCurrentPageActionCreator,
	toggleIsFetchingActionCreator,
} from '../../redux/search_users_reducer';

const SearchUsersContainer = ({
	setUsers,
	setTotalUsersCount,
	setCurrentPage,
	currentPage,
	pageSize,
	totalUsersCount,
	usersData,
	unfollow,
	follow,
	isFetching,
	toggleIsFetching,
}) => {

	useEffect(() => {
		toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				toggleIsFetching(false);
				setUsers(response.data.items);
				setTotalUsersCount(response.data.totalCount);
			});
	}, [currentPage, toggleIsFetching, pageSize, setTotalUsersCount, setUsers]);

	const onPageChanged = (numberPage) => {
		setCurrentPage(numberPage);
		toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${pageSize}`)
			.then((response) => {
				toggleIsFetching(false);
				setUsers(response.data.items);
			});
	};

	return (
		<SearchUsers
			totalUsersCount={totalUsersCount}
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
		totalUsersCount: state.searchUsersPage.totalUsersCount,
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
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountActionCreator(totalCount));
		},
		setCurrentPage: (numberPage) => {
			dispatch(setCurrentPageActionCreator(numberPage));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingActionCreator(isFetching));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersContainer);
