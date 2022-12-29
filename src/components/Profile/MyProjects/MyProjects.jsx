
import Project1 from './Project_1/Project_1';
import Project2 from './Project_2/Project_2';
import Project3 from './Project_3/Project_3';
import Project4 from './Project_4/Project_4';
import Project5 from './Project_5/Project_5';
import Project6 from './Project_6/Project_6';
import classes from './../MyProjects/Profile_projects.module.css';

const MyProjects = () => {
	return (
		<div className={classes.myProjects}>
			<div className={classes.title}>My projects</div>
			<a href="#s" className={classes.all}>All</a>
			<div className={classes.items}>
				<Project1 />
				<Project2 />
				<Project3 />
				<Project4 />
				<Project5 />
				<Project6 />
			</div>
		</div>
	);
};

export default MyProjects;