
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<a href="#s">
					<img src="/img/art_space_logo.png" alt="art_space_logo" />
				</a>
			</div>
			<nav className={classes.menu}>
				<div><a href="#s" >Search</a></div>
				<div><a href="#s">Notifications</a></div>
				<div><a href="#s">News</a></div>
				<div><a href="#s">Settings</a></div>
			</nav>
		</header>
	);
};

export default Header;