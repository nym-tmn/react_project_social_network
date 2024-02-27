import React from 'react';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import classes from './Music.module.css';

const Music: React.FC = () => {

	return (
		<div className={classes.color}>Music</div>
	);
};

export default withAuthRedirect(Music);
