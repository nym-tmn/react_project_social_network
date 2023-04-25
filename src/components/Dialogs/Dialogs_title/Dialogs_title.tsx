import React from 'react';

import classes from './Dialogs_title.module.css';

type TitlePropsType = {
	title: string
}

const Title: React.FC<TitlePropsType> = (props) => {

	return (
		<div className={classes.title}>{props.title}</div>
	);
};

export default Title;
