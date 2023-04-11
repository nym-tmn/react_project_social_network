
import React from 'react';
import MyProject from './My_project/My_project';

import classes from './My_projects_items.module.css';

const MyProjectsItems = (props) => {

	let myProjectsElements = props.myProjectsData
		.map(project => <MyProject key={project.id} id={project.id} iconMyProject={project.iconMyProject} name={project.nameMyProject} link={project.linkMyProject} />)

	return (
		<div className={classes.items}>
			{myProjectsElements}
		</div>
	);
};

export default MyProjectsItems;