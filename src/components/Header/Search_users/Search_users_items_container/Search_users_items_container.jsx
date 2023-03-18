
import React from 'react';
import SearchUsersItems from './Search_users_items/Search_users_items';

import classes from './Search_users_items_container.module.css';

const SearchUsersItemsContainer = (props) => {

	return (
		<div className={classes.usersItemsContainer}>
			<SearchUsersItems
				usersData={props.usersData}
				pageSize={props.pageSize}
				totalCountUsers={props.totalCountUsers}
				currentPage={props.currentPage}
				follow={props.follow}
				unfollow={props.unfollow}
				setUsers={props.setUsers}
				setTotalCountUsers={props.setTotalCountUsers}
				setCurrentPage={props.setCurrentPage} />
			<button className={classes.showMore}>Show more</button>
		</div>
	);
};

export default SearchUsersItemsContainer;