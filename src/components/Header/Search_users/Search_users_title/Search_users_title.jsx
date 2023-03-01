
import React from 'react';

import classes from './Search_users_title.module.css';

const SearchUsersTitle = (props) => {
	return (
		<div className={classes.title}>{props.title}</div>
	);
};

export default SearchUsersTitle;