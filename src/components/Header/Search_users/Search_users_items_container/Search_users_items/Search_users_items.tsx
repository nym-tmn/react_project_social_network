import React from 'react';

import Preloader from '../../../../common/Preloader/Preloader';
import { SearchUsersPropsType } from '../../../../../types/types';
import searchUserAvatar from '../../../../../assets/images/search_user_avatar.png';

import classes from './Search_users_items.module.css';

const SearchUsersItems: React.FC<SearchUsersPropsType> = (props) => {

	const countPages = Math.ceil(props.totalUsersCount / props.pageSize);

	const pages = [] as Array<number>;

	for (let i = 1; i <= countPages; i++) {
		pages.push(i);
	}

	return (
		<div className={classes.usersContainer}>
			<div className={classes.usersPages}>
				{pages.map((p) => {
					return (
						<div
							onClick={() => { props.onPageChanged(p); }}
							className={`${props.currentPage === p && classes.selected} ${classes.userPage}`}>
							{p}
						</div>
					);
				})}
			</div>
			<div className={classes.usersItems} >
				<div className={classes.loadingSpinner} >{props.isFetching ? <Preloader/> : null}</div>
				{props.usersData.map(user => <div className={classes.userItem} key={user.id} >
					<div className={classes.avatar}>
						<img src={user.photos.small != null ? user.photos.small : searchUserAvatar} alt="" />
					</div>
					{user.followed
						? <button
							onClick={() => { props.unfollow(user.id); }}
							className={classes.follow}>
							Unfollow
						</button>
						: <button
							onClick={() => { props.follow(user.id); }}
							className={classes.follow}>
							Follow
						</button>}
					<div className={classes.userInfo}>
						<div className={classes.fullName}>{user.name}</div>
						<div className={classes.age}>{'user.age'}</div>
						<div className={classes.country}>{'user.location.countryName'}</div>
						<div className={classes.city}>{'user.location.cityName'}</div>
						<div className={classes.status}>{user.status}</div>
					</div>
				</div>)}
			</div >
		</div>
	);
};

export default SearchUsersItems;
