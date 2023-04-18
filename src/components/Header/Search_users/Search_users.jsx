import React from 'react';

import SearchUsersTitle from './Search_users_title/Search_users_title';
import SearchUsersItemsContainer from './Search_users_items_container/Search_users_items_container';

import classes from './Search_users.module.css';

const SearchUsers = (props) => {

	return (
		<div className={classes.container}>
			<SearchUsersTitle title='Search for users' />
			<SearchUsersItemsContainer
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
				currentPage={props.currentPage}
				usersData={props.usersData}
				unfollow={props.unfollow}
				follow={props.follow}
				isFetching={props.isFetching} />
		</div>
	);
};

export default SearchUsers;
