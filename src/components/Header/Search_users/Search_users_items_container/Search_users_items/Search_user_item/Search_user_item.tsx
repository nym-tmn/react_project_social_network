import React from 'react';
import { NavLink } from 'react-router-dom';

import searchUserAvatar from '../../../../../../assets/images/search_user_avatar.png';

import classes from './Search_user_item.module.css';
import { UsersDataType } from '../../../../../../types/types';

type SearchUserPropsType = {
	user: UsersDataType
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	followingInProgress: Array<number>
}

const SearchUserItem: React.FC<SearchUserPropsType> = (props) => {

	return (
		<div className={classes.userItem} >
			<div className={classes.avatar}>
				<NavLink to={`/${props.user.id}`} >
					<img src={props.user.photos.small != null ? props.user.photos.small : searchUserAvatar} alt="" />
				</NavLink>
			</div>
			{props.user.followed
				? <button disabled={props.followingInProgress.some((id: number) => id === props.user.id)} className={classes.followed}
					onClick={() => {
						props.unfollow(props.user.id);
					}}>
					Unfollow
				</button>
				: <button disabled={props.followingInProgress.some((id: number) => id === props.user.id)} className={classes.unfollowed}
					onClick={() => {
						props.follow(props.user.id);
					}}>
					Follow
				</button>}
			<div className={classes.userInfo}>
				<NavLink to={`/${props.user.id}`}>
					<div className={classes.fullName}>{props.user.name}</div>
				</NavLink>
				<div className={classes.age}>{'user.age'}</div>
				<div className={classes.country}>{'user.location.countryName'}</div>
				<div className={classes.city}>{'user.location.cityName'}</div>
				<div className={classes.status}>{props.user.status}</div>
			</div>
		</div>
	);
};

export default SearchUserItem;
