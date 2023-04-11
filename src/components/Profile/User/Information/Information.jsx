
import React from 'react';
import classes from './../Information/Information.module.css';

const Information = () => {
	return (
		<div className={classes.information}>
			<div className={classes.name}>Yurii Nedobryshev</div>
			<div className={classes.dateOfBirth}>Date of Birth: August 04,1990</div>
			<div className={classes.city}>City: Tyumen</div>
			<div className={classes.education}>Education: Tyumen Industrial University (TIU)'07</div>
			<div className={classes.major}>Major: Machinery and apparatus for chemical production</div>
			<div className={classes.hobby}>Hobby: Snowboarding</div>
			<div className={classes.mobilePhone}>Mobile phone: +7 922 488 2174</div>
			<div className={classes.aboutMe}>About me: I am a beginner frontend developer. I dream of mastering this profession, getting a job and reaching great heights in the field of information technology.</div>
		</div>
	);
};

export default Information;