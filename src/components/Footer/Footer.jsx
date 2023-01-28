
import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
				<div className={classes.copy}>
					Copy 2022
				</div>
				<div className={classes.text}>
					Lorem ipsum dolor sit amet.
				</div>
		</footer>
	);
};

export default Footer;