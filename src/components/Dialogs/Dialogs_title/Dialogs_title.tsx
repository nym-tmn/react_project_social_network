import React from 'react';

import { TitlePropsType } from '../../../types/types';

import classes from './Dialogs_title.module.css';

const Title: React.FC<TitlePropsType> = (props) => {

	return (
		<div className={classes.title}>{props.title}</div>
	);
};

export default Title;
