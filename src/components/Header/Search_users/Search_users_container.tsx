import React, { useEffect } from 'react';
import { compose } from 'redux';
import { ConnectedProps, connect } from 'react-redux';

import SearchUsers from './Search_users';
import { followThunkCreator, getUsersThunkCreator, unfollowThunkCreator } from '../../../redux/search_users_reducer';
import { UsersDataType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux_store';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

type MapStateToPropsType = {
	usersData: Array<UsersDataType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: Array<number>
}

const SearchUsersContainer: React.FC<SearchUsersContainerPropsType> = ({
	currentPage,
	pageSize,
	totalUsersCount,
	usersData,
	unfollow,
	follow,
	isFetching,
	followingInProgress,
	getUsers,
}) => {

	useEffect(() => {

		getUsers(currentPage, pageSize);

	}, [getUsers, currentPage, pageSize]);

	const onPageChanged = (pageNumber: number) => {

		getUsers(pageNumber, pageSize);

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
			followingInProgress={followingInProgress} />
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
	follow: followThunkCreator,
	unfollow: unfollowThunkCreator,
	getUsers: getUsersThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SearchUsersContainerPropsType extends PropsFromRedux { }

export default compose(
	withAuthRedirect,
	connector,
)(SearchUsersContainer);
