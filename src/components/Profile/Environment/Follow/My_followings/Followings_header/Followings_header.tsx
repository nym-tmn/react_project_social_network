import React from 'react';

import classes from './Followings_header.module.css';

const Header: React.FC = () => {

	return (
			<div className={classes.header}>
				<div className={classes.title}>Followings</div>
				<a href="#s" className={classes.all}>All</a>
			</div>
	);
};

export default Header;
