
import React from 'react';
import StoreContext from '../../../../../Store_context';
import Projects from './Projects';

const ProjectsContainer = (/* props */) => {

	// let state = props.store.getState();

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					return (
						<Projects projects={state.profilePage.projectsData} />
					);
				}
			}
		</StoreContext.Consumer>
	);
};

export default ProjectsContainer;