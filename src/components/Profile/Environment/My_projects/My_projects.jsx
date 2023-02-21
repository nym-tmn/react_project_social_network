
import React from 'react';
import Header from './Projects_header/Projects_header';
import ProjectsContainer from './Projects/Projects_container';

import classes from './../My_projects/My_projects.module.css';

const MyProjects = () => {
	return (
		<div className={classes.myProjects}>
			<Header />
			<ProjectsContainer />
		</div>
	);
};

export default MyProjects;