
import React from 'react';
import Instagram from './Instagram/Instagram';
import Twitter from './Twitter/Twitter';
import Facebook from './Facebook/Facebook';

import classes from './../Social_networks/Social_networks.module.css';

const SocialNetworks = (props) => {
	return (
			<div className={classes.socialNetworks}>
			<Instagram/>
			<Twitter/>
			<Facebook/>
			</div>
	);
};

export default SocialNetworks;