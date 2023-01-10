
import User from './User/User';
import Environment from './Environment/Environment';

import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.mainContent}>
			<User />
			<Environment />
		</div>
	);
};

export default Profile;