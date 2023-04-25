import React from 'react';

import MyProjects from './My_projects/My_projects';
import DemoProjects from './Demo_projects/Demo_projects';

import classes from './Projects.module.css';

const Projects = () => {

	return (
		<div className={classes.projects}>
			<MyProjects/>
			<DemoProjects/>
		</div>
	);
};

export default Projects;
