
import Follower1 from './Follower_1/Follower_1';
import Follower2 from './Follower_2/Follower_2';
import Follower3 from './Follower_3/Follower_3';
import Follower4 from './Follower_4/Follower_4';
import Follower5 from './Follower_5/Follower_5';
import Follower6 from './Follower_6/Follower_6';

import classes from './Followers.module.css';

const Followers = () => {
	return (
			<div className={classes.items}>
				<Follower1 />
				<Follower2 />
				<Follower3 />
				<Follower4 />
				<Follower5 />
				<Follower6 />
			</div>
	);
};

export default Followers;