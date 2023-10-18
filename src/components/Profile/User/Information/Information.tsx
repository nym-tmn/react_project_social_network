import React from 'react';

import { UserProfileType } from '../../../../types/types';
import socialNetworkIconYouTube from '../../../images/social_network_icon_youtube.png';
import socialNetworkIconVk from '../../../images/social_network_icon_vk.png';
import socialNetworkIconGitHub from '../../../images/social_network_icon_github.png';
import socialNetworkIconTelegram from '../../../images/social_network_icon_telegram.png';
import socialNetworkIcon from '../../../images/social_network_icon.png';
import lookingForAJobTrue from '../../../images/green_tick.png';
import lookingForAJobFalse from '../../../images/red_cross.png';

import classes from './Information.module.css';

const Information: React.FC<UserProfileType> = (props: UserProfileType) => {

	return (
		<div className={classes.information}>
			<div className={classes.name}>{props.fullName}</div>
			<div className={classes.dateOfBirth}>Date of Birth: August 04,1990</div>
			<div className={classes.city}>City: Tyumen</div>
			<div className={classes.education}>Education: Tyumen Industrial University (TIU)'07</div>
			<div className={classes.major}>Major: Machinery and apparatus for chemical production</div>
			<div className={classes.hobby}>Hobby: Snowboarding</div>
			<div className={classes.mobilePhone}>Mobile phone: +7 922 488 2174</div>
			<div>Contacts:</div>
			<div className={classes.contactsItems}>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactsIcon}></img>
					<a href='#s' className={classes.contacts}>{ props.contacts?.instagram}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactsIcon}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.twitter}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactsIcon}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.facebook}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIconVk} alt='socialNetworkIconVk' className={classes.contactsIcon}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.vk}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIconYouTube} alt='socialNetworkIconYouTube' className={`${classes.contactsIcon} ${classes.borderRadius}`}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.youtube}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIconGitHub} alt='socialNetworkIconGitHub' className={classes.contactsIcon}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.github}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIcon} alt='socialNetworkIcon' className={classes.contactsIcon}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.website}</a>
				</div>
				<div className={classes.contactsItem}>
					<img src={socialNetworkIconTelegram} alt='socialNetworkIconTelegram' className={`${classes.contactsIcon} ${classes.borderRadius}`}></img>
					<a href='#s' className={classes.contacts}>{props.contacts?.mainLink}</a>
				</div>
			</div>
			<div className={classes.aboutMe}>About me: {props.aboutMe}
				{/* About me: I am a beginner frontend developer. I dream of mastering this profession, getting a job
				and reaching great heights in the field of information technology. */}
			</div>
			<div className={classes.lookingForAJob}>
				<div>Looking for a job:</div>
				{props.lookingForAJob ? <img src={lookingForAJobTrue} alt='lookingForAJob' /> : <img src={lookingForAJobFalse} alt='lookingForAJob' />}
			</div>
			<div className={classes.lookingForAJobDescription}>Description: {props.lookingForAJobDescription}</div>
		</div>
	);
};

export default Information;
