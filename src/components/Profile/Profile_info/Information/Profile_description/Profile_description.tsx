import React from 'react';

import lookingForAJobTrue from '../../../../images/green_tick.png';
import lookingForAJobFalse from '../../../../images/red_cross.png';

import classes from './Profile_description.module.css';

type ProfileDescriptionPropsType = {
	fullName?: string
	aboutMe?: string
	lookingForAJob?: boolean
	lookingForAJobDescription?: string
}

const ProfileDescription: React.FC<ProfileDescriptionPropsType> = (props) => {

	return (
		<div className={classes.profileDescription}>
			<div className={classes.userName}>{props.fullName}</div>
			<div>
				<span>About me:</span> {!props.aboutMe ? 'No information' : props.aboutMe}
			</div>
			<div className={classes.lookingForAJob}>
				<div className={classes.title}>Looking for a job:</div>
				{props.lookingForAJob ? <img src={lookingForAJobTrue} alt='lookingForAJob' /> : <img src={lookingForAJobFalse} alt='lookingForAJob' />}
			</div>
			<div>
				<span>Description:</span> {!props.lookingForAJobDescription ? 'No description' : props.lookingForAJobDescription}
			</div>
		</div>
	);
};

export default ProfileDescription;
