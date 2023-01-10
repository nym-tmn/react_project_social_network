
import CoverPicture from './Cover_picture/Cover_picture';
import Avatar from './Avatar/Avatar';
import Information from './Information/Information';

import classes from './../User/User.module.css';

const User = () => {
	return (
		<div className={classes.user}>
			<CoverPicture />
			<Avatar />
			<Information />
		</div>
	);
};

export default User;