
import classes from './../Followers_header/Followers_header.module.css';

const Header = () => {
	return (
			<div className={classes.header}>
				<div className={classes.title}>Followers</div>
				<a href="#s" className={classes.all}>All</a>
			</div>
	);
};

export default Header;