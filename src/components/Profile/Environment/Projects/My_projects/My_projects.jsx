
import React from 'react';
import Header from './My_projects_header/My_projects_header';
import MyProjectsItemsContiner from './My_projects_items/My_projects_items_container';

import classes from './My_projects.module.css';

const MyProjects = () => {
	return (
		<div className={classes.myProjects}>
			<Header/>
			<MyProjectsItemsContiner/>
		</div>
	);
};

export default MyProjects;