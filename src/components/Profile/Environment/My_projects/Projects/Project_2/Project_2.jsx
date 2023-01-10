
import classes from './../Project.module.css';

const Project2 = () => {
	return (
		<div className={classes.item}>
			<a href="#s" className={classes.linkImage}>
				<div className={classes.linkImageContiner}>
					<img src="/img/projects/icon_project_2.png" alt="icon_project_2.png" />
				</div>
			</a>
			<a href="#s" className={classes.linkProject}>project_2</a>
		</div>
	);
};

export default Project2;