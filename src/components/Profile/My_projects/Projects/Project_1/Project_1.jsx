
import classes from './../Project.module.css';

const Project1 = () => {
	return (
		<div className={classes.item}>
			<a href="#s" className={classes.linkImage}>
				<div className={classes.linkImageContiner}>
					<img src="/img/projects/icon_project_1.png" alt="icon_project_1.png" />
				</div>
			</a>
			<a href="#s" className={classes.linkProject}>project_1</a>
		</div>
	);
};

export default Project1;