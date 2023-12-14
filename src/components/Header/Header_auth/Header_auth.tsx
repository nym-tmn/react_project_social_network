import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderAuthorized from './Header_authorized/Header_authorized';
import SignOut from './Header_sign_out/Header_sign_out';

import classes from './Header_auth.module.css';

export type HeaderAuthPropsType = {
	login: string | null,
	userAvatar: string | null,
	isAuth: boolean,
	logoutUser: () => void,
}

const HeaderAuth: React.FC<HeaderAuthPropsType> = (props) => {

	return (
		<div className={`${!props.isAuth && classes.noSignIn}`}>
			{props.isAuth
				? <div className={classes.headerAuth}>
					<HeaderAuthorized login={props.login} userAvatar={props.userAvatar} />
					<SignOut logoutUser={props.logoutUser} />
				</div>
				: <NavLink to='/sign_in' className={({ isActive }) => (isActive ? classes.active : '')}>Sign In</NavLink>}
		</div>
	);
};

export default HeaderAuth;
