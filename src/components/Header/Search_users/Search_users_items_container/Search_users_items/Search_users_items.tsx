import React from 'react';

// import Preloader from '../../../../common/Preloader/Preloader';
import { SearchUsersPropsType } from '../../Search_users';
import Paginator from '../../../../common/Paginator/Paginator';
import SearchUserItem from './Search_user_item/Search_user_item';
import loadingSpinner from '../../../../../assets/images/loading_spinner.gif';

import classes from './Search_users_items.module.css';

const SearchUsersItems: React.FC<SearchUsersPropsType> = (props) => {

	return (
		<div className={classes.usersContainer}>
			<Paginator
				totalItemsCount={props.totalItemsCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
				currentPage={props.currentPage}
				portionSize={props.portionSize}
			/>
			<div className={classes.usersItems} >
				<div className={`${props.isFetching && classes.loadingSpinner}`}>{props.isFetching ? <img src={loadingSpinner} alt='loadingSpinner' /> : null}</div>
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

/* <div className={classes.loadingSpinner}>
			<img src={loadingSpinner} alt='loadingSpinner' />
		</div> */
