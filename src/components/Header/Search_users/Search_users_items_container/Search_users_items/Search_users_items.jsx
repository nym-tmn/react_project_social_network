
import React from 'react';
import axios from 'axios';
import searchUserAvatar from './../../../../../assets/images/search_user_avatar.png';

import classes from './Search_users_items.module.css';

const SearchUsersItems = (props) => {

	if (props.usersData.length === 0) {

		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			props.setUsers(response.data.items);
		});
	};

	return (
		<div className={classes.usersItems}>
			{props.usersData.map(user => <div className={classes.userItem} key={user.id} >
				<div className={classes.avatar}>
					<img src={user.photos.small != null ? user.photos.small : searchUserAvatar } alt="" />
				</div>
				{user.followed
					? <button onClick={() => { props.unfollow(user.id) }} className={classes.follow}>Unfollow</button>
					: <button onClick={() => { props.follow(user.id) }} className={classes.follow}>Follow</button>}
				<div className={classes.userInfo}>
					<div className={classes.fullName}>{user.name}</div>
					<div className={classes.age}>{'user.age'}</div>
					<div className={classes.country}>{'user.location.countryName'}</div>
					<div className={classes.city}>{'user.location.cityName'}</div>
					<div className={classes.status}>{user.status}</div>
				</div>
			</div>)}
		</div>
	);
};

export default SearchUsersItems;