
import classes from './../Project_4/Project_4.module.css';

const Project4 = () => {
	return (
		<div className={classes.item}>
			<a href="#s" className={classes.linkImage}>
				<div className={classes.linkImageContiner}>
					<img src="/img/projects/icon_project_4.png" alt="icon_project_4.png" />
				</div>
			</a>
			<a href="#s" className={classes.linkProject}>project_4</a>
		</div>
	);
};

export default Project4;