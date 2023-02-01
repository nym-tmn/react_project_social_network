
import React from 'react';
import Header from './Projects_header/Projects_header';
import Projects from './Projects/Projects';

import classes from './../My_projects/My_projects.module.css';

const MyProjects = (props) => {
	return (
		<div className={classes.myProjects}>
			<Header />
			<Projects projects={props.projects} />
		</div>
	);
};

export default MyProjects;