import React from 'react';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import classes from './Video.module.css';

const Video: React.FC = () => {

	return (
		<div className={classes.color}>Video</div>
	);
};

export default withAuthRedirect(Video);
