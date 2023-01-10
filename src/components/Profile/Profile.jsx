
import MyPosts from './My_posts/My_posts';
import MyProjects from './My_projects/My_projects';
import Follow from './Follow/Follow';
import EmptyBlock from './Empty_block/Empty_block';

import classes from './Profile.module.css';
import socNet from './Profile_social_networks.module.css';

const Profile = () => {
	return (
		<div className={classes.mainContent}>
			<div className={classes.user}>
				<div className={classes.coverPicture}></div>
				<div className={classes.avatar}>
					<div className={classes.avatarContiner}>
						<div className={classes.avatarImage}></div>
					</div>
					<div className={socNet.socialNetworks}>
						<div className={socNet.instagram}>
							<a href="#s">
								<img src="/img/icon_instagram.png" alt="icon_instagram.png" />
							</a>
							<a href="#s">
								<div className={socNet.title}>www.instagram.com/john_smith</div>
							</a>
						</div>
						<div className={socNet.twitter}>
							<a href="#s">
								<img src="/img/icon_twitter.png" alt="icon_twitter.png" />
							</a>
							<a href="#s">
								<div className={socNet.title}>www.twitter.com/john_smith</div>
							</a>
						</div>
						<div className={socNet.facebook}>
							<a href="#s">
								<img src="/img/icon_facebook.png" alt="icon_facebook.png" />
							</a>
							<a href="#s">
								<div className={socNet.title}>www.facebook.com/john_smith</div>
							</a>
						</div>
					</div>
				</div>
				<div className={classes.information}>
					<div className={classes.name}>John Smith</div>
					<div className={classes.dateOfBirth}>Date of Birth: December 08,1987</div>
					<div className={classes.city}>City: New York</div>
					<div className={classes.education}>Education: New York University (NYU)'08</div>
					<div className={classes.major}>Major: Communication and Journalism</div>
					<div className={classes.hobby}>Hobby: Photography</div>
					<div className={classes.mobilePhone}>Mobile phone: +1 212 555 9637</div>
					<div className={classes.aboutMe}>About me: Lorem ipsum  corrupti id repudianlendus veniam nihil! Temporibus eveniet soluta repellat sequi ipsam eligendi nam amet .</div>
				</div>
			</div>
			<div className={classes.environment}>
				<MyPosts />
				<MyProjects />
				<Follow />
				<EmptyBlock />
			</div>
		</div>
	);
};

export default Profile;