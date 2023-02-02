
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Project.module.css';

const Project = (props) => {

	let path = '/profile/projects' + props.id;

	return (
		<div className={classes.item}>
			<NavLink to={path} className={classes.linkItem}>
				<div className={classes.linkImageContiner}>
					<img src={props.iconProject} alt="icon_project_1.png" />
				</div>
				<div className={classes.nameProject}>{props.nameProject}</div>
			</NavLink>
		</div>
	);
};

export default Project;