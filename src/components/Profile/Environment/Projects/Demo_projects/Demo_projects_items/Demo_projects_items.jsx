import React from 'react';

import DemoProject from './Demo_project/Demo_project';

import classes from './Demo_projects_items.module.css';

const DemoProjectsItems = (props) => {

	const demoProjectsElements = props.projectsDemoData
		.map(project => <DemoProject
			key={project.id}
			id={project.id}
			iconDemoProject={project.iconDemoProject}
			name={project.nameDemoProject} />);

	return (
		<div className={classes.items}>
			{demoProjectsElements}
		</div>
	);
};

export default DemoProjectsItems;
