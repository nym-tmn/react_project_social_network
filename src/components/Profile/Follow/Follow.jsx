
import Followers from './Followers/Followers';
import Following from './Following/Following';

import classes from './../Follow/Follow.module.css';

const Follow = () => {
	return (
		<div className={classes.follow}>
			<Followers />
			<Following />
		</div>
	);
};

export default Follow;