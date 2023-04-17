import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => {

	return (
		<nav className={classes.nav}>
			<div>
				<NavLink to='/' className={({ isActive }) => (isActive ? classes.active : '')}>
					Profile
				</NavLink>
			</div>
			<div>
				<NavLink to='/dialogs' className={({ isActive }) => (isActive ? classes.active : '')}>
					Messages
				</NavLink>
			</div>
			<div>
				<NavLink to='/photo' className={({ isActive }) => (isActive ? classes.active : '')}>
					Photo
				</NavLink>
			</div>
			<div>
				<NavLink to='/video' className={({ isActive }) => (isActive ? classes.active : '')}>
					Video
				</NavLink>
			</div>
			<div>
				<NavLink to='/music' className={({ isActive }) => (isActive ? classes.active : '')}>
					Music
				</NavLink>
			</div>
			<div>
				<NavLink to='/comunities' className={({ isActive }) => (isActive ? classes.active : '')}>
					Comunities
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
