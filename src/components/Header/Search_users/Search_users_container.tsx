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
	getPortionSize,
	getTotalItemsCount,
	getUsersData,
	// getUsersDataReselector,
} from '../../../redux/search_users_selectors';

type MapStateToPropsType = {
	usersData: Array<UsersDataType>
	pageSize: number
	totalItemsCount: number
	currentPage: number
	portionSize: number
	isFetching: boolean
	followingInProgress: Array<number>
}

const SearchUsersContainer: React.FC<SearchUsersContainerPropsType> = ({
	currentPage,
	portionSize,
	pageSize,
	totalItemsCount,
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
			totalItemsCount={totalItemsCount}
			pageSize={pageSize}
			onPageChanged={onPageChanged}
			currentPage={currentPage}
			portionSize={portionSize}
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
		totalItemsCount: getTotalItemsCount(state),
		currentPage: getCurrentPage(state),
		portionSize: getPortionSize(state),
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
