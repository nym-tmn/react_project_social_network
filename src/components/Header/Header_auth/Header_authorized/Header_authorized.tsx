import React from 'react';

import { UserAuthDataType } from '../../../../types/types';
import avatarIcon from '../../../../assets/images/avatar_icon.png';

import classes from './Header_authorized.module.css';

const HeaderAuthorized: React.FC<Pick<UserAuthDataType, 'login' | 'userAvatar'>> = (props) => {

	return (
		<div className={classes.authorizedBlock}>
			<img className={classes.authorizedAvatar} src={props.userAvatar || avatarIcon} alt="avatar_icon" />
			<div className={classes.authorizedName}>{props.login}</div>
		</div>
	);
};

export default HeaderAuthorized;
