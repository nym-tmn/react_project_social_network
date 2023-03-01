
import React from 'react';
import SearchUsersTitle from './Search_users_title/Search_users_title';
import SearchUsersItemsContainer from './Search_users_items_container/Search_users_items_container';

import classes from './Search_users.module.css';

const SearchUsers = (props) => {

	return (
		<div className={classes.container}>
			<SearchUsersTitle title='Search for users' />
			<SearchUsersItemsContainer
				usersData={props.usersData}
				follow={props.follow}
				unfollow={props.unfollow}
				loadUsers={props.loadUsers} />
		</div>
	);
};

export default SearchUsers;