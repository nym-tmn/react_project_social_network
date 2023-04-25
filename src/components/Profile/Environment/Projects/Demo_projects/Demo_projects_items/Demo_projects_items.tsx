import React from 'react';

import DemoProject from './Demo_project/Demo_project';
import { ProjectsDemoDataType } from '../../../../../../types/types';

import classes from './Demo_projects_items.module.css';

type DemoProjectsItemsPropsType = {
	projectsDemoData: Array<ProjectsDemoDataType>
}

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
