import React from 'react';

import loadingSpinner from '../../../assets/images/loading_spinner.gif';

const Preloader = () => {

	return (
		<img src={loadingSpinner} alt='loadingSpinner' />
	);
};

export default Preloader;
