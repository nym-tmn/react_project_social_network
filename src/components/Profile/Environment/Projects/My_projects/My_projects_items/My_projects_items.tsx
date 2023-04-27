import React from 'react';

import MyProject from './My_project/My_project';
import { MyProjectsItemsPropsType } from './My_projects_items_container';

import classes from './My_projects_items.module.css';

const MyProjectsItems: React.FC<MyProjectsItemsPropsType> = (props) => {

	const myProjectsElements = props.myProjectsData
		.map(project => <MyProject
			key={project.id}
			id={project.id}
			iconMyProject={project.iconMyProject}
			nameMyProject={project.nameMyProject}
			linkMyProject={project.linkMyProject} />);

	return (
		<div className={classes.items}>
			{myProjectsElements}
		</div>
	);
};

export default MyProjectsItems;
