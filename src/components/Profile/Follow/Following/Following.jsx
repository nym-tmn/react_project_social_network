
import classes from './../Following/Following.module.css';

const Following = () => {
	return (
			<div className={classes.following}>
				<div className={classes.title}>Following</div>
				<a href="#s" className={classes.all}>All</a>
				<div className={classes.items}>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/following/icon_following_1.png" alt="icon_following_1.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_1</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/following/icon_following_2.png" alt="icon_following_2.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_2</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/following/icon_following_3.png" alt="icon_following_3.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_3</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/following/icon_following_4.png" alt="icon_following_4.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_4</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/following/icon_following_5.png" alt="icon_following_5.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_5</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/following/icon_following_6.png" alt="icon_following_6.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_6</a>
					</div>
				</div>
			</div>
	);
};

export default Following;