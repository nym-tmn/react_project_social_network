import React from 'react';

import lookingForAJobTrue from '../../../../images/green_tick.png';
import lookingForAJobFalse from '../../../../images/red_cross.png';
import { ContactsType } from '../../../../../types/types';
import ProfileDataContacts from './Profile_data_contacts/Profile_data_contacts';
import editIcon from '../../../../../assets/images/edit_icon.png';

import classes from './Profile_data.module.css';

type ProfileDescriptionPropsType = {
	fullName?: string
	aboutMe?: string
	lookingForAJob?: boolean
	lookingForAJobDescription?: string
	contacts?: ContactsType
	isEditMode: boolean
	setIsEditMode: (isEditMode: boolean) => void
}

const ProfileData: React.FC<ProfileDescriptionPropsType> = (props) => {

	const activateEditMode = () => {
		props.setIsEditMode(true);
	};

	return (
		<div className={classes.profileDescription}>
			<button className={classes.editProfileButton} title='Click to edit profile' onClick={activateEditMode}>
				<img src={editIcon} alt="edit_icon" />
			</button>
			<div className={classes.userName}>{props.fullName}</div>
			<div className={classes.aboutMe}>
				<span>About me:</span> {props.aboutMe}
			</div>
			<div className={classes.lookingForAJob}>
				<div className={classes.title}>Looking for a job:</div>
				{props.lookingForAJob ? <img src={lookingForAJobTrue} alt='lookingForAJob' /> : <img src={lookingForAJobFalse} alt='lookingForAJob' />}
			</div>
			<div className={classes.lookingForAJobDescription}>
				<span>My professional skills:</span> {props.lookingForAJobDescription}
			</div>
			<div className={classes.contactsContainer}>
				<div className={classes.title}>Contacts:</div>
				<div className={classes.contactsItems}>
					{props.contacts
						&& Object
							.entries(props.contacts)
							.map(key => <ProfileDataContacts key={key[0]} contactTitle={key[0]} contactValue={key[1]} />)}
				</div>
			</div>
		</div>
	);
};

export default ProfileData;
