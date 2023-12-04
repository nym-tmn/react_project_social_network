import React from 'react';

import ProfileDescription from './Profile_description/Profile_description';
import ProfileContacts from './Profile_contacts/Profile_contacts';
import ProfileStatus from './Profile_status/Profile_status';
import { ProfileInfoPropsType } from '../Profile_info';

import classes from './Information.module.css';

const Information: React.FC<Omit<ProfileInfoPropsType, 'photos'>> = (props) => {

	return (
		<div className={classes.information}>
			<ProfileDescription
				fullName={props.fullName}
				aboutMe={props.aboutMe}
				lookingForAJob={props.lookingForAJob}
				lookingForAJobDescription={props.lookingForAJobDescription}
			/>
			<ProfileStatus
				statusText={props.statusText}
				updateUserStatus={props.updateUserStatus}
			/>
			<ProfileContacts contacts={props.contacts} />
		</div>
	);
};

export default Information;
