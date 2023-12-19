import React from 'react';

import { UserAuthDataType } from '../../../../types/types';
import userAvatarIcon from '../../../images/sign_in_avatar.png';

import classes from './Header_authorized.module.css';

const HeaderAuthorized: React.FC<Pick<UserAuthDataType, 'login' | 'userAvatar'>> = (props) => {

	return (
		<div className={classes.authorizedBlock}>
			<img className={classes.authorizedAvatar} src={props.userAvatar || userAvatarIcon} alt="userAvatar" />
			<div className={classes.authorizedName}>{props.login}</div>
		</div>
	);
};

export default HeaderAuthorized;
