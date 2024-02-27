import React from 'react';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

import classes from './News.module.css';

const News: React.FC = () => {

	return (
		<div className={classes.color}>News</div>
	);
};

export default withAuthRedirect(News);
