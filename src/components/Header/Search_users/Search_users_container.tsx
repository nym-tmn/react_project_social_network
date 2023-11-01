import React, { useEffect } from 'react';
import axios from 'axios';
import { ConnectedProps, connect } from 'react-redux';

import SearchUsers from './Search_users';
import {	actions } from '../../redux/search_users_reducer';
import { UsersDataType } from '../../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
	usersData: Array<UsersDataType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
}

type ResponseType = {
	items: Array<UsersDataType>
	totalCount: number
	error: null | string
}

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
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				toggleIsFetching(false);
				setUsers(response.data.items);
				setTotalUsersCount(response.data.totalCount);
			});
	}, [currentPage, toggleIsFetching, pageSize, setTotalUsersCount, setUsers]);

	const onPageChanged = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		toggleIsFetching(true);
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
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

const connector = connect(mapStateToProps, {
	follow: actions.followActionCreator,
	unfollow: actions.unFollowActionCreator,
	setUsers: actions.setUsersActionCreator,
	setTotalUsersCount: actions.setTotalUsersCountActionCreator,
	setCurrentPage: actions.setCurrentPageActionCreator,
	toggleIsFetching: actions.toggleIsFetchingActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SearchUsersContainerPropsType extends PropsFromRedux { }

export default connector(SearchUsersContainer);
