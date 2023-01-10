
import classes from './../Avatar/Avatar.module.css';

const Avatar = () => {
	return (
			<div className={classes.avatar}>
				<div className={classes.avatarContiner}>
					<div className={classes.avatarImage}></div>
				</div>
				<div className={classes.socialNetworks}>
					<div className={classes.instagram}>
						<a href="#s">
							<img src="/img/icon_instagram.png" alt="icon_instagram.png" />
						</a>
						<a href="#s">
							<div className={classes.title}>www.instagram.com/john_smith</div>
						</a>
					</div>
					<div className={classes.twitter}>
						<a href="#s">
							<img src="/img/icon_twitter.png" alt="icon_twitter.png" />
						</a>
						<a href="#s">
							<div className={classes.title}>www.twitter.com/john_smith</div>
						</a>
					</div>
					<div className={classes.facebook}>
						<a href="#s">
							<img src="/img/icon_facebook.png" alt="icon_facebook.png" />
						</a>
						<a href="#s">
							<div className={classes.title}>www.facebook.com/john_smith</div>
						</a>
					</div>
				</div>
			</div>
	);
};

export default Avatar;