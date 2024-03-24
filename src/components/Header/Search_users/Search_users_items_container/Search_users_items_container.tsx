import React from 'react';

import SearchUsersItems from './Search_users_items/Search_users_items';
import { SearchUsersPropsType } from '../Search_users';

import classes from './Search_users_items_container.module.css';

const SearchUsersItemsContainer: React.FC<SearchUsersPropsType> = (props) => {

	return (
		<div className={classes.usersItemsContainer}>
			<SearchUsersItems
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
			<button className={classes.showMore}>Show more</button>
		</div>
	);
};

export default SearchUsersItemsContainer;
