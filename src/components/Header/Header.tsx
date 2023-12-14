import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderAuthContainer from './Header_auth/Header_auth_container';

import classes from './Header.module.css';

const Header: React.FC = () => {

	return (
		<header className={classes.header}>
			<div className={classes.logo}></div>
			<nav className={classes.menu}>
				<div>
					<NavLink to="/search" className={({ isActive }) => (isActive ? classes.active : '')}>
						Search for users
					</NavLink>
				</div>
				<div>
					<NavLink to="/notifications" className={({ isActive }) => (isActive ? classes.active : '')}>
						Notifications
					</NavLink>
				</div>
				<div>
					<NavLink to="/news" className={({ isActive }) => (isActive ? classes.active : '')}>
						News
					</NavLink>
				</div>
				<div>
					<NavLink to="/settings" className={({ isActive }) => (isActive ? classes.active : '')}>
						Settings
					</NavLink>
				</div>
			</nav>
			<div className={classes.auth}>
				<HeaderAuthContainer />
			</div>
		</header>
	);
};

export default Header;
