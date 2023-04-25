import React from 'react';
import { NavLink } from 'react-router-dom';
import { MyProjectsDataType } from '../../../../../../../types/types';

import classes from './My_project.module.css';

const MyProject: React.FC<MyProjectsDataType> = (props) => {

	const path = props.linkMyProject;

	return (
		<div className={classes.item}>
			<NavLink target='_blank' to={path} className={classes.linkItem}>
				<div className={classes.linkImageContiner}>
					<img src={props.iconMyProject} alt="icon_my_project.png" />
				</div>
				<div className={classes.name}>{props.nameMyProject}</div>
			</NavLink>
		</div>
	);
};

export default MyProject;
