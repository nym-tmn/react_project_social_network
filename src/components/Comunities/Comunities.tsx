import React from 'react';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import classes from './Comunities.module.css';

const Comunities: React.FC = () => {

	return (
		<div className={classes.color}>Comunities</div>
	);
};

export default withAuthRedirect(Comunities);
