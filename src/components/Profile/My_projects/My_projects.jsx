
import Projects from './Projects/Projects';
import classes from './../My_projects/My_projects.module.css';

const MyProjects = () => {
	return (
		<div className={classes.myProjects}>
			<div className={classes.title}>My projects</div>
			<a href="#s" className={classes.all}>All</a>
			<Projects />
		</div>
	);
};

export default MyProjects;