
import Followers from './Followers/Followers'

import classes from './../My_followers/My_followers.module.css';

const MyFollowers = () => {
	return (
			<div className={classes.followers}>
				<div className={classes.title}>Followers</div>
			<a href="#s" className={classes.all}>All</a>
			<Followers />
			</div>
	);
};

export default MyFollowers;