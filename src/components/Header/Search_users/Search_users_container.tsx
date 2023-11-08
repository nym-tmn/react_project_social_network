import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import SearchUsers from './Search_users';
import { actions } from '../../../redux/search_users_reducer';
import { UsersDataType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';
import { usersAPI } from '../../../api/api';

type MapStateToPropsType = {
	usersData: Array<UsersDataType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: boolean
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
	followingInProgress,
	toggleFollowing,
}) => {

	useEffect(() => {
		toggleIsFetching(true);
		usersAPI.getUsers(currentPage, pageSize).then((data) => {
				toggleIsFetching(false);
				setUsers(data.items);
				setTotalUsersCount(data.totalCount);
			});
	}, [currentPage, toggleIsFetching, pageSize, setTotalUsersCount, setUsers]);

	const onPageChanged = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, pageSize).then((data) => {
				toggleIsFetching(false);
				setUsers(data.items);
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
			isFetching={isFetching}
			followingInProgress={followingInProgress}
			toggleFollowing={toggleFollowing} />
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		usersData: state.searchUsersPage.usersData,
		pageSize: state.searchUsersPage.pageSize,
		totalUsersCount: state.searchUsersPage.totalUsersCount,
		currentPage: state.searchUsersPage.currentPage,
		isFetching: state.searchUsersPage.isFetching,
		followingInProgress: state.searchUsersPage.followingInProgress,
	};
};

const connector = connect(mapStateToProps, {
	follow: actions.followActionCreator,
	unfollow: actions.unFollowActionCreator,
	setUsers: actions.setUsersActionCreator,
	setTotalUsersCount: actions.setTotalUsersCountActionCreator,
	setCurrentPage: actions.setCurrentPageActionCreator,
	toggleIsFetching: actions.toggleIsFetchingActionCreator,
	toggleFollowing: actions.toggleFollowingProgressActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SearchUsersContainerPropsType extends PropsFromRedux { }

export default connector(SearchUsersContainer);
