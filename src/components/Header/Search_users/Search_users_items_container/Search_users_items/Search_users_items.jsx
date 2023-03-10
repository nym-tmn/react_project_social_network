
import React from 'react';
import axios from 'axios';
import searchUserAvatar from './../../../../../assets/images/search_user_avatar.png';

import classes from './Search_users_items.module.css';

class SearchUsersItems extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items);
		});
	};

	render() {
		return (
			<div className={classes.usersItems} >
				{/* <button onClick={this.getUsers}>Get Users</button> */}
				{this.props.usersData.map(user => <div className={classes.userItem} key={user.id} >
					<div className={classes.avatar}>
						<img src={user.photos.small != null ? user.photos.small : searchUserAvatar} alt="" />
					</div>
					{user.followed
						? <button onClick={() => { this.props.unfollow(user.id) }} className={classes.follow}>Unfollow</button>
						: <button onClick={() => { this.props.follow(user.id) }} className={classes.follow}>Follow</button>}
					<div className={classes.userInfo}>
						<div className={classes.fullName}>{user.name}</div>
						<div className={classes.age}>{'user.age'}</div>
						<div className={classes.country}>{'user.location.countryName'}</div>
						<div className={classes.city}>{'user.location.cityName'}</div>
						<div className={classes.status}>{user.status}</div>
					</div>
				</div>)}
			</div >
		);
	}
}

export default SearchUsersItems;