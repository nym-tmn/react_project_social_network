import React from 'react';

import classes from './Profile_data_contacts.module.css';

export type ProfileContactsPropsType = {
	contactTitle: string
	contactValue: string | undefined
}

const ProfileDataContacts: React.FC<ProfileContactsPropsType> = (props) => {

	return (
		<div className={classes.contactItem}>
			<b className={classes.contactTitle}>
				{props.contactTitle}:
			</b>
			<a href={props.contactValue} className={`${!props.contactValue && classes.disabledLink} ${classes.contactValue}`}>
				{!props.contactValue ? 'No information' : props.contactValue}
			</a>
		</div>
	);
};

export default ProfileDataContacts;
