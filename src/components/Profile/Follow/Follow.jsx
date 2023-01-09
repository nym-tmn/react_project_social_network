
import MyFollowers from './My_followers/My_followers';
import MyFollowing from './My_following/My_following';

import classes from './../Follow/Follow.module.css';

const Follow = () => {
	return (
		<div className={classes.follow}>
			<MyFollowers />
			<MyFollowing />
		</div>
	);
};

export default Follow;