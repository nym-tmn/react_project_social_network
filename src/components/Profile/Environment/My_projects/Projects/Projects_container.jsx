
import React from 'react';
import Projects from './Projects';

const ProjectsContainer = (props) => {

	let state = props.store.getState();

	return (
		<Projects projects={state.profilePage.projectsData} />
	);
};

export default ProjectsContainer;