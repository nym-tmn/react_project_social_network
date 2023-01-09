
import Followers from './Followers/Followers';

import classes from './../Follow/Follow.module.css';
import flng from './../../Profile/Profile_following.module.css';

const Follow = () => {
	return (
		<div className={classes.follow}>
			<Followers />
			<div className={flng.following}>
				<div className={flng.title}>Following</div>
				<a href="#s" className={flng.all}>All</a>
				<div className={flng.items}>
					<div className={flng.item}>
						<a href="#s" className={flng.linkImage}>
							<img src="/img/following/icon_following_1.png" alt="icon_following_1.png" />
						</a>
						<a href="#s" className={flng.linkName}>name_1</a>
					</div>
					<div className={flng.item}>
						<a href="#s" className={flng.linkImage}>
							<img src="/img/following/icon_following_2.png" alt="icon_following_2.png" />
						</a>
						<a href="#s" className={flng.linkName}>name_2</a>
					</div>
					<div className={flng.item}>
						<a href="#s" className={flng.linkImage}>
							<img src="/img/following/icon_following_3.png" alt="icon_following_3.png" />
						</a>
						<a href="#s" className={flng.linkName}>name_3</a>
					</div>
					<div className={flng.item}>
						<a href="#s" className={flng.linkImage}>
							<img src="/img/following/icon_following_4.png" alt="icon_following_4.png" />
						</a>
						<a href="#s" className={flng.linkName}>name_4</a>
					</div>
					<div className={flng.item}>
						<a href="#s" className={flng.linkImage}>
							<img src="/img/following/icon_following_5.png" alt="icon_following_5.png" />
						</a>
						<a href="#s" className={flng.linkName}>name_5</a>
					</div>
					<div className={flng.item}>
						<a href="#s" className={flng.linkImage}>
							<img src="/img/following/icon_following_6.png" alt="icon_following_6.png" />
						</a>
						<a href="#s" className={flng.linkName}>name_6</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Follow;