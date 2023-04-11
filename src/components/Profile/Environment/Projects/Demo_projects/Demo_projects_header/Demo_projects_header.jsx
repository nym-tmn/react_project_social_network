
import React from 'react';

import classes from './Demo_projects_header.module.css';

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.title}>Demo projects</div>
			<a href="#s" className={classes.all}>All</a>
		</div>
	);
};

export default Header;