
import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<div>
				<a href='/profile'>Profile</a>
			</div>
			<div>
				<a href='/messages'>Messages</a>
			</div>
			<div>
				<a href='/photo'>Photo</a>
			</div>
			<div>
				<a href='/video'>Video</a>
			</div>
			<div>
				<a href='/music'>Music</a>
			</div>
			<div>
				<a href='/comunities'>Comunities</a>
			</div>
		</nav>
	);
};

export default Nav;