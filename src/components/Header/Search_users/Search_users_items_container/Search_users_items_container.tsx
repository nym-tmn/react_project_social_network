import React from 'react';

import SearchUsersItems from './Search_users_items/Search_users_items';
import { SearchUsersPropsType } from '../../../../types/types';

import classes from './Search_users_items_container.module.css';

const SearchUsersItemsContainer: React.FC<SearchUsersPropsType> = (props: SearchUsersPropsType) => {

	return (
		<div className={classes.usersItemsContainer}>
			<SearchUsersItems
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
				currentPage={props.currentPage}
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
