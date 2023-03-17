
import React from 'react';
import classes from './../Information/Information.module.css';

const Information = () => {
	return (
			<div className={classes.information}>
				<div className={classes.name}>John Smith</div>
				<div className={classes.dateOfBirth}>Date of Birth: December 08,1987</div>
				<div className={classes.city}>City: New York</div>
				<div className={classes.education}>Education: New York University (NYU)'08</div>
				<div className={classes.major}>Major: Communication and Journalism</div>
				<div className={classes.hobby}>Hobby: Photography</div>
				<div className={classes.mobilePhone}>Mobile phone: +1 212 555 9637</div>
				<div className={classes.aboutMe}>About me: Lorem ipsum  corrupti id repudianlendus veniam nihil! Temporibus eveniet soluta repellat sequi ipsam eligendi nam amet.</div>
			</div>
	);
};

export default Information;