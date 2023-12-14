import React from 'react';

import classes from './Header_sign_out.module.css';
import { HeaderAuthPropsType } from '../Header_auth';

const SignOut: React.FC<Pick<HeaderAuthPropsType, 'logoutUser'>> = (props) => {

	const onSignOutClick = () => {
		props.logoutUser();
	};

	return (
		<button className={classes.signOutButton} onClick={onSignOutClick}>Sign Out</button>
	);
};

export default SignOut;
