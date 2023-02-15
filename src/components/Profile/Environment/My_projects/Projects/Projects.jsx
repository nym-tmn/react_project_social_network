
import React from 'react';
import Project from './Project/Project';

import classes from './../Projects/Projects.module.css';

const Projects = (props) => {

	let projectsElements = props.projects
		.map(project => <Project id={project.id} iconProject={project.iconProject} nameProject={project.nameProject} />)

	return (
		<div className={classes.items}>
			{projectsElements}
		</div>
	);
};

export default Projects;