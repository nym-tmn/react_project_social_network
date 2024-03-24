import React from 'react';

import socialNetworkIconYouTube from '../../../../images/social_network_icon_youtube.png';
import socialNetworkIconVk from '../../../../images/social_network_icon_vk.png';
import socialNetworkIconGitHub from '../../../../images/social_network_icon_github.png';
import socialNetworkIconTelegram from '../../../../images/social_network_icon_telegram.png';
import socialNetworkIcon from '../../../../images/social_network_icon.png';
import { ContactsType } from '../../../../../types/types';

import classes from './Profile_contacts.module.css';

type ProfileContactsPropsType = {
	contacts?: ContactsType
}

const ProfileContacts: React.FC<ProfileContactsPropsType> = (props) => {

	return (
		<>
			<div className={classes.title}>Contacts:</div>
			<div className={classes.contactsItems}>
				<div className={classes.contactItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactIcon}></img>
					<a href={props.contacts?.instagram} className={`${!props.contacts?.instagram && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.instagram ? 'No information' : props.contacts?.instagram}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactIcon}></img>
					<a href={props.contacts?.twitter} className={`${!props.contacts?.twitter && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.twitter ? 'No information' : props.contacts?.twitter}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactIcon}></img>
					<a href={props.contacts?.facebook} className={`${!props.contacts?.facebook && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.facebook ? 'No information' : props.contacts?.facebook}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIconVk} alt='socialNetworkIconVk' className={classes.contactIcon}></img>
					<a href={props.contacts?.vk} className={`${!props.contacts?.vk && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.vk ? 'No information' : props.contacts?.vk}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIconYouTube} alt='socialNetworkIconYouTube' className={`${classes.contactIcon} ${classes.borderRadius}`}></img>
					<a href={props.contacts?.youtube} className={`${!props.contacts?.youtube && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.youtube ? 'No information' : props.contacts?.youtube}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIconGitHub} alt='socialNetworkIconGitHub' className={classes.contactIcon}></img>
					<a href={props.contacts?.github} className={`${!props.contacts?.github && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.github ? 'No information' : props.contacts?.github}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactIcon}></img>
					<a href={props.contacts?.website} className={`${!props.contacts?.website && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.website ? 'No information' : props.contacts?.website}</a>
				</div>
				<div className={classes.contactItem}>
					<img src={socialNetworkIconTelegram} alt='socialNetworkIconTelegram' className={`${classes.contactIcon} ${classes.borderRadius}`}></img>
					<a href={props.contacts?.mainLink} className={`${!props.contacts?.mainLink && classes.disabledLink} ${classes.contact}`}>{!props.contacts?.mainLink ? 'No information' : props.contacts?.mainLink}</a>
				</div>
			</div>
		</>
	);
};

export default ProfileContacts;
