import React from 'react';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import classes from './Photo.module.css';

const Photo: React.FC = () => {

	return (
		<div className={classes.color}>Photo</div>
	);
};

export default withAuthRedirect(Photo);
