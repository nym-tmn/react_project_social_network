
import React from 'react';
import SearchUsersItems from './Search_users_items/Search_users_items';

import classes from './Search_users_items_container.module.css';

const SearchUsersItemsContainer = (props) => {

	return (
		<div className={classes.usersItemsContainer}>
			<SearchUsersItems
				usersData={props.usersData}
				follow={props.follow}
				unfollow={props.unfollow}
				setUsers={props.setUsers} />
			<button className={classes.showMore}>Show more</button>
		</div>
	);
};

export default SearchUsersItemsContainer;