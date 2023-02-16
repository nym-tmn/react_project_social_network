
import React from 'react';
import Header from './Projects_header/Projects_header';
import ProjectsContainer from './Projects/Projects_container';
// import Projects from './Projects/Projects';

import classes from './../My_projects/My_projects.module.css';

const MyProjects = (/* props */) => {
	return (
		<div className={classes.myProjects}>
			<Header />
			<ProjectsContainer /* store={props.store} */ />
		</div>
	);
};

export default MyProjects;