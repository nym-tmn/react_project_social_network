import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Sign_in.module.css';
import { UserAuthDataType } from '../../../types/types';

const SignIn: React.FC<UserAuthDataType> = (props: UserAuthDataType) => {

	return (
		<div>
			{props.isAuth ? props.login : <NavLink to='/sign_in' className={({ isActive }) => (isActive ? classes.active : '')}>Sign In</NavLink>}
		</div>
	);
};

export default SignIn;
