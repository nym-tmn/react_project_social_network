
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.menu}>
			<div>
				<a href='#s'>Profile</a>
			</div>
			<div>
				<a href='#s'>Messages</a>
			</div>
			<div>
				<a href='#s'>Projects</a>
			</div>
			<div>
				<a href='#s'>Photos</a>
			</div>
			<div>
				<a href='#s'>Video</a>
			</div>
			<div>
				<a href='#s'>Music</a>
			</div>
			<div>
				<a href='#s'>Comunities</a>
			</div>
		</nav>
	);
};

export default Nav;