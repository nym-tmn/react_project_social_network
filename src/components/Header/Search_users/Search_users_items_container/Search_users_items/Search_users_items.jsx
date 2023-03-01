
import React from 'react';

import classes from './Search_users_items.module.css';

const SearchUsersItems = (props) => {

	if (props.usersData.length === 0) {
		props.loadUsers( [
			{
				id: 1,
				userAvatar: require('./../../../../images/search_user_avatar.png'),
				followed: true,
				fullName: 'first_name last_name',
				age: 24,
				status: 'Lorem ipsum dolor sit, amet!',
				location: { countryName: 'country', cityName: 'city' },
			},
			{
				id: 2,
				userAvatar: require('./../../../../images/search_user_avatar.png'),
				followed: true,
				fullName: 'first_name last_name',
				age: 38,
				status: 'Lorem ipsum dolor sit, amet!',
				location: { countryName: 'country', cityName: 'city' },
			},
			{
				id: 3,
				userAvatar: require('./../../../../images/search_user_avatar.png'),
				followed: false,
				fullName: 'first_name last_name',
				age: 41,
				status: 'Lorem ipsum dolor sit, amet!',
				location: { countryName: 'country', cityName: 'city' },
			},
			{
				id: 4,
				userAvatar: require('./../../../../images/search_user_avatar.png'),
				followed: true,
				fullName: 'first_name last_name',
				age: 56,
				status: 'Lorem ipsum dolor sit, amet!',
				location: { countryName: 'country', cityName: 'city' },
			},
			{
				id: 5,
				userAvatar: require('./../../../../images/search_user_avatar.png'),
				followed: false,
				fullName: 'first_name last_name',
				age: 18,
				status: 'Lorem ipsum dolor sit, amet!',
				location: { countryName: 'country', cityName: 'city' },
			},
			{
				id: 6,
				userAvatar: require('./../../../../images/search_user_avatar.png'),
				followed: false,
				fullName: 'first_name last_name',
				age: 32,
				status: 'Lorem ipsum dolor sit, amet!',
				location: { countryName: 'country', cityName: 'city' },
			},
		])
	};

	return (
		<div className={classes.usersItems}>
			{props.usersData.map(user => <div className={classes.userItem} key={user.id} >
				<div className={classes.avatar}>
					<img src={user.userAvatar} alt="search_user_avatar.png" />
				</div>
				{user.followed
					? <button onClick={() => { props.unfollow(user.id) }} className={classes.follow}>Unfollow</button>
					: <button onClick={() => { props.follow(user.id) }} className={classes.follow}>Follow</button>}
				<div className={classes.userInfo}>
					<div className={classes.fullName}>{user.fullName}</div>
					<div className={classes.age}>{user.age}</div>
					<div className={classes.country}>{user.location.countryName}</div>
					<div className={classes.city}>{user.location.cityName}</div>
					<div className={classes.status}>{user.status}</div>
				</div>
			</div>)}
		</div>
	);
};

export default SearchUsersItems;