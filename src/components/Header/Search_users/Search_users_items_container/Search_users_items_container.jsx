
import React from 'react';
import SearchUsersItems from './Search_users_items/Search_users_items';

import classes from './Search_users_items_container.module.css';

const SearchUsersItemsContainer = (props) => {

	return (
		<div className={classes.usersItemsContainer}>
			<SearchUsersItems
				totalCountUsers={props.totalCountUsers}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
				currentPage={props.currentPage}
				usersData={props.usersData}
				unfollow={props.unfollow}
				follow={props.follow} />
			<button className={classes.showMore}>Show more</button>
		</div>
	);
};

export default SearchUsersItemsContainer;