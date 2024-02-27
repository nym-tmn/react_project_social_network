import React from 'react';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

import classes from './Notifications.module.css';

const Notifications: React.FC = () => {

	return (
		<div className={classes.color}>Notifications</div>
	);
};

export default withAuthRedirect(Notifications);
