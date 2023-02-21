
import Projects from './Projects';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

	return {
		projectsData: state.profilePage.projectsData
	}
};

const ProjectsContainer = connect(mapStateToProps)(Projects);

export default ProjectsContainer;

