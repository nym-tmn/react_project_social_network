import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectsDemoDataType } from '../../../../../../../types/types';

import classes from './Demo_project.module.css';

const DemoProject: React.FC<ProjectsDemoDataType> = (props) => {

	const path = `/profile/demo_project/${props.id}`;

	return (
		<div className={classes.item}>
			<NavLink to={path} className={classes.linkItem}>
				<div className={classes.linkImageContiner}>
					<img src={props.iconDemoProject} alt="icon_demo_project.png" />
				</div>
				<div className={classes.name}>{props.nameDemoProject}</div>
			</NavLink>
		</div>
	);
};

export default DemoProject;
