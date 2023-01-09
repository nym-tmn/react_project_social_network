
import Follower1 from './Follower/Follower_1/Follower_1';
import Follower2 from './Follower/Follower_2/Follower_2';
import Follower3 from './Follower/Follower_3/Follower_3';
import Follower4 from './Follower/Follower_4/Follower_4';
import Follower5 from './Follower/Follower_5/Follower_5';
import Follower6 from './Follower/Follower_6/Follower_6';

import classes from './../Followers/Followers.module.css';

const Followers = () => {
	return (
			<div className={classes.followers}>
				<div className={classes.title}>Followers</div>
				<a href="#s" className={classes.all}>All</a>
				<div className={classes.items}>
				<Follower1 />
				<Follower2 />
				<Follower3 />
				<Follower4 />
				<Follower5 />
				<Follower6 />
				</div>
			</div>
	);
};

export default Followers;