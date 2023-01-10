
import classes from './../Projects_header/Projects_header.module.css';

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.title}>My projects</div>
			<a href="#s" className={classes.all}>All</a>
		</div>
	);
};

export default Header;