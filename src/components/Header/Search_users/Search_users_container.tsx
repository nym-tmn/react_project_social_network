import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import SearchUsers from './Search_users';
import { actions } from '../../../redux/search_users_reducer';
import { UsersDataType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';
import { userAPI } from '../../../api/api';

type MapStateToPropsType = {
	usersData: Array<UsersDataType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
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
		userAPI.getUsers1(currentPage, pageSize).then((data) => {
				toggleIsFetching(false);
				setUsers(data.items);
				setTotalUsersCount(data.totalCount);
			});
	}, [currentPage, toggleIsFetching, pageSize, setTotalUsersCount, setUsers]);

	const onPageChanged = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		toggleIsFetching(true);
		userAPI.getUsers2(pageNumber, pageSize).then((data) => {
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
