import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserAuthDataType } from '../../../types/types';
import userAvatarIcon from '../../images/sign_in_avatar.png';

import classes from './Sign_in.module.css';

const SignIn: React.FC<UserAuthDataType> = (props: UserAuthDataType) => {

	return (
		<div className={classes.signInBlock}>
			<div className={`${!props.isAuth && classes.noSignIn} ${classes.signInName}`}>{props.isAuth ? props.login : <NavLink to='' className={({ isActive }) => (isActive ? classes.active : '')}>Sign In</NavLink>}</div>
			{props.isAuth ? <img className={classes.signInAvatar} src={!props.userAvatar ? userAvatarIcon : props.userAvatar} alt="userAvatar" /> : null}
		</div>
	);
};

export default SignIn;
