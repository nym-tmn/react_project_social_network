import React from 'react';

import classes from './Search_users_title.module.css';

type SearchUsersTitlePropsType = {
	title: string
}

const SearchUsersTitle: React.FC<SearchUsersTitlePropsType> = (props) => {

	return (
		<div className={classes.title}>{props.title}</div>
	);
};

export default SearchUsersTitle;
