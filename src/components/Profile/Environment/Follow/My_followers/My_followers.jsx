
import Header from './Followers_header/Followers_header';
import Followers from './Followers/Followers';

import classes from './../My_followers/My_followers.module.css';


const MyFollowers = () => {
	return (
			<div className={classes.followers}>
			<Header/>
			<Followers/>
			</div>
	);
};

export default MyFollowers;