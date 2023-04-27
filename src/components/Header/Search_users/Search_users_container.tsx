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
import { UsersDataType } from '../../../types/types';
import { AppDispatch, AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
	usersData: Array<UsersDataType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
}

type MapDispatchToPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: Array<UsersDataType>) => void
	setTotalUsersCount: (totalCount: number) => void
	setCurrentPage: (numberPage: number) => void
	toggleIsFetching: (isFetching: boolean) => void
}

type SearchUsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const SearchUsersContainer: React.FC<SearchUsersContainerPropsType> = ({
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

	const onPageChanged = (numberPage: number) => {
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		usersData: state.searchUsersPage.usersData,
		pageSize: state.searchUsersPage.pageSize,
		totalUsersCount: state.searchUsersPage.totalUsersCount,
		currentPage: state.searchUsersPage.currentPage,
		isFetching: state.searchUsersPage.isFetching,
	};
};

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
	return {
		follow: (userId: number) => {
			dispatch(followActionCreator(userId));
		},
		unfollow: (userId: number) => {
			dispatch(unFollowActionCreator(userId));
		},
		setUsers: (users: Array<UsersDataType>) => {
			dispatch(setUsersActionCreator(users));
		},
		setTotalUsersCount: (totalCount: number) => {
			dispatch(setTotalUsersCountActionCreator(totalCount));
		},
		setCurrentPage: (numberPage: number) => {
			dispatch(setCurrentPageActionCreator(numberPage));
		},
		toggleIsFetching: (isFetching: boolean) => {
			dispatch(toggleIsFetchingActionCreator(isFetching));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersContainer);
