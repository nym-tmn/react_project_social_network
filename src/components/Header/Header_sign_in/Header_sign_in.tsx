import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserAuthDataType } from '../../../types/types';
import userAvatarIcon from '../../images/sign_in_avatar.png';

import classes from './Header_sign_in.module.css';

const HeaderSignIn: React.FC<UserAuthDataType> = (props: UserAuthDataType) => {

	return (
		<div className={classes.signInBlock}>
			{props.isAuth ? <img className={classes.signInAvatar} src={!props.userAvatar ? userAvatarIcon : props.userAvatar} alt="userAvatar" /> : null}
			<div className={`${!props.isAuth && classes.noSignIn} ${classes.signInName}`}>{props.isAuth ? props.login : <NavLink to='/sign_in' className={({ isActive }) => (isActive ? classes.active : '')}>Sign In</NavLink>}</div>
		</div>
	);
};

export default HeaderSignIn;
