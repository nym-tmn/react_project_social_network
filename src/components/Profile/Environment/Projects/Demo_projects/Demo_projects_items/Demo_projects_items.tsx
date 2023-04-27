import React from 'react';

import DemoProject from './Demo_project/Demo_project';
import { DemoProjectsItemsPropsType } from './Demo_projects_items_container';

import classes from './Demo_projects_items.module.css';

const DemoProjectsItems: React.FC<DemoProjectsItemsPropsType> = (props) => {

	const demoProjectsElements = props.projectsDemoData
		.map(project => <DemoProject
			key={project.id}
			id={project.id}
			iconDemoProject={project.iconDemoProject}
			nameDemoProject={project.nameDemoProject} />);

	return (
		<div className={classes.items}>
			{demoProjectsElements}
		</div>
	);
};

export default DemoProjectsItems;
