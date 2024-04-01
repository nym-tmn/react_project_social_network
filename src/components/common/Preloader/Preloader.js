import React from 'react';

import loadingSpinner from '../../../assets/images/loading_spinner.gif';

import classes from './Preloader.module.css';

const Preloader = () => {

	return (
		<div className={classes.loadingSpinner}>
			<img src={loadingSpinner} alt='loadingSpinner' />
		</div>
	);
};

export default Preloader;
