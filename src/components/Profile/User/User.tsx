import React from 'react';

import CoverPicture from './Cover_picture/Cover_picture';
import Avatar from './Avatar/Avatar';
import Information from './Information/Information';
import { ProfilePropsType } from '../../../types/types';

import classes from './User.module.css';

const User: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

	return (
		<div className={classes.user}>
			<CoverPicture/>
			<Avatar photos={props.photos} />
			<Information
				fullName={props.fullName}
				aboutMe={props.aboutMe}
				contacts={props.contacts}
				lookingForAJob={props.lookingForAJob}
				lookingForAJobDescription={props.lookingForAJobDescription}
			/>
		</div>
	);
};

export default User;
