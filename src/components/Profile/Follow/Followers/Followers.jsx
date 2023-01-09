
import classes from './../Followers/Followers.module.css';

const Followers = () => {
	return (
			<div className={classes.followers}>
				<div className={classes.title}>Followers</div>
				<a href="#s" className={classes.all}>All</a>
				<div className={classes.items}>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/followers/icon_follower_1.png" alt="icon_follower_1.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_1</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/followers/icon_follower_2.png" alt="icon_follower_2.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_2</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/followers/icon_follower_3.png" alt="icon_follower_3.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_3</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/followers/icon_follower_4.png" alt="icon_follower_4.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_4</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/followers/icon_follower_5.png" alt="icon_follower_5.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_5</a>
					</div>
					<div className={classes.item}>
						<a href="#s" className={classes.linkImage}>
							<img src="/img/followers/icon_follower_6.png" alt="icon_follower_6.png" />
						</a>
						<a href="#s" className={classes.linkName}>name_6</a>
					</div>
				</div>
			</div>
	);
};

export default Followers;