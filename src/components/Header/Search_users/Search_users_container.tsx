import React, { useEffect } from 'react';
import { compose } from 'redux';
import { ConnectedProps, connect } from 'react-redux';

import SearchUsers from './Search_users';
import { followThunkCreator, getUsersThunkCreator, unfollowThunkCreator } from '../../../redux/search_users_reducer';
import { UsersDataType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux_store';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching, getPageSize,
	getTotalUsersCount,
	getUsersData,
	// getUsersDataReselector,
} from '../../../redux/search_users_selectors';

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
		// For example how to use lilbrary reselector
		// usersData: getUsersDataReselector(state),
		usersData: getUsersData(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
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
