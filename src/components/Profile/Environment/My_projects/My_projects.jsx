
import Header from './Projects_header/Projects_header';
import Projects from './Projects/Projects';

import classes from './../My_projects/My_projects.module.css';

const MyProjects = () => {
	return (
		<div className={classes.myProjects}>
			<Header />
			<Projects />
		</div>
	);
};

export default MyProjects;