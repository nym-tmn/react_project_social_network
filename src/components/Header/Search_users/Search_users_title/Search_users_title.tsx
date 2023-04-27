import React from 'react';

import { TitlePropsType } from '../../../../types/types';

import classes from './Search_users_title.module.css';

const SearchUsersTitle: React.FC<TitlePropsType> = (props) => {

	return (
		<div className={classes.title}>{props.title}</div>
	);
};

export default SearchUsersTitle;
