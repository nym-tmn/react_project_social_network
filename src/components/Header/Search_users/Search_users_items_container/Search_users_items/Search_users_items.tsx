import React from 'react';

import Preloader from '../../../../common/Preloader/Preloader';
import { SearchUsersPropsType } from '../../Search_users';
import Paginator from '../../../../common/Paginator/Paginator';
import SearchUserItem from './Search_user_item/Search_user_item';

import classes from './Search_users_items.module.css';

const SearchUsersItems: React.FC<SearchUsersPropsType> = (props) => {

	return (
		<div className={classes.usersContainer}>
			<Paginator
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
				currentPage={props.currentPage}
			/>
			<div className={classes.usersItems} >
				<div className={classes.loadingSpinner} >{props.isFetching ? <Preloader /> : null}</div>
				{props.usersData.map(user => <SearchUserItem
					key={user.id}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow}
					user={user}
				/>)}
			</div >
		</div>
	);
};

export default SearchUsersItems;
