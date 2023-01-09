
import classes from './../Header/Header.module.css';

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.title}>My projects</div>
			<a href="#s" className={classes.all}>All</a>
		</div>
	);
};

export default Header;