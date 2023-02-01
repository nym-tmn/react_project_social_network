
import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
	return (
		<div className={classes.item}>
			<a href="#s" className={classes.linkItem}>
				<div className={classes.linkImageContiner}>
					<img src={props.iconProject} alt="icon_project_1.png" />
				</div>
				<div className={classes.nameProject}>{props.nameProject}</div>
			</a>
		</div>
	);
};

export default Project;