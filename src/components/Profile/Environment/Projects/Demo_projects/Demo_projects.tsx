import React from 'react';

import Header from './Demo_projects_header/Demo_projects_header';
import DemoProjectsItemsContiner from './Demo_projects_items/Demo_projects_items_container';

import classes from './Demo_projects.module.css';

const DemoProjects = () => {

	return (
		<div className={classes.demoProjects}>
			<Header/>
			<DemoProjectsItemsContiner/>
		</div>
	);
};

export default DemoProjects;
