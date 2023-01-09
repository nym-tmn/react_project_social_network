
import classes from './Profile.module.css';
import socNet from './Profile_social_networks.module.css';
import posts from './Profile_my_posts.module.css';
import MyProjects from './My_projects/My_projects';
import Follow from './Follow/Follow';

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
				<div className={posts.myPosts}>
					<div className={posts.title}>My posts</div>
					<div className={posts.enterPosts}>
						<div className={`${posts.iconAvatar} ${posts.iconAvatar}`}>
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
						<input className={posts.whatNew} placeholder="What's new?" type="text" />
						<button className={posts.buttonSend}>Send</button>
					</div>
					<div className={posts.post}>
						<div className={posts.post1}>
							<div className={`${posts.post1IconAvatar} ${posts.iconAvatar}`}>
								<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
							</div>
							<div className={posts.post1UserName}>John Smith</div>
							<div className={posts.post1Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!</div>
							<div className={posts.post1Image}></div>
						</div>
						<div className={posts.post2}>
							<div className={`${posts.post2IconAvatar} ${posts.iconAvatar}`}>
								<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
							</div>
							<div className={posts.post2UserName}>John Smith</div>
							<div className={posts.post2Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.</div>
							<div className={posts.post2Image}></div></div>
						<div className={posts.post3}>
							<div className={`${posts.post3IconAvatar} ${posts.iconAvatar}`}>
								<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
							</div>
							<div className={posts.post3UserName}>John Smith</div>
							<div className={posts.post3Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.</div>
							<div className={posts.post3Image}></div></div>
					</div>
				</div>
				<MyProjects />
				<Follow />
				<div className={classes.emptyBlock2}></div>
			</div>
		</div>
	);
};

export default Profile;