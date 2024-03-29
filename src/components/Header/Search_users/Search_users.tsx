import React from 'react';

import SearchUsersTitle from './Search_users_title/Search_users_title';
import SearchUsersItemsContainer from './Search_users_items_container/Search_users_items_container';
import { UsersDataType } from '../../../types/types';

import classes from './Search_users.module.css';

export type SearchUsersPropsType = {
	totalItemsCount: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	currentPage: number
	portionSize: number
	usersData: Array<UsersDataType>
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
}

const SearchUsers: React.FC<SearchUsersPropsType> = (props) => {

	return (
		<div className={classes.container}>
			<SearchUsersTitle title='Search for users' />
			<SearchUsersItemsContainer
				totalItemsCount={props.totalItemsCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
				currentPage={props.currentPage}
				portionSize={props.portionSize}
				usersData={props.usersData}
				unfollow={props.unfollow}
				follow={props.follow}
				isFetching={props.isFetching}
				followingInProgress={props.followingInProgress}/>
		</div>
	);
};

export default SearchUsers;
