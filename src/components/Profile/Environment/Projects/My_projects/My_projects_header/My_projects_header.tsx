import React from 'react';

import classes from './My_projects_header.module.css';

const Header = () => {

	return (
		<div className={classes.header}>
			<div className={classes.title}>My projects</div>
			<a href="#s" className={classes.all}>All</a>
		</div>
	);
};

export default Header;
