import React from 'react';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

import classes from './Settings.module.css';

const Settings: React.FC = () => {
	return (
		<div className={classes.color}>Settings</div>
	);
};

export default withAuthRedirect(Settings);
