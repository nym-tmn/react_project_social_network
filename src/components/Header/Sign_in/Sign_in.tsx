import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserAuthDataType } from '../../../types/types';
import userAvatarIcon from '../../images/dialog_avatar.png';

import classes from './Sign_in.module.css';

const SignIn: React.FC<UserAuthDataType> = (props: UserAuthDataType) => {

	return (
		<div className={classes.signInBlock}>
			<div className={classes.signInName}>{props.isAuth ? props.login : <NavLink to='/sign_in' className={({ isActive }) => (isActive ? classes.active : '')}>Sign In</NavLink>}</div>
			<img className={classes.signInAvatar} src={!props.userAvatar ? userAvatarIcon : props.userAvatar} alt="userAvatar" />
		</div>
	);
};

export default SignIn;
