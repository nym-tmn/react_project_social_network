
import classes from './../Project_3/Project_3.module.css';

const Project3 = () => {
	return (
		<div className={classes.item}>
			<a href="#s" className={classes.linkImage}>
				<div className={classes.linkImageContiner}>
					<img src="/img/projects/icon_project_3.png" alt="icon_project_3.png" />
				</div>
			</a>
			<a href="#s" className={classes.linkProject}>project_3</a>
		</div>
	);
};

export default Project3;