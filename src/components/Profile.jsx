
import classes from './Profile.module.css';
import flrs from './Profile_followers.module.css';
import flng from './Profile_following.module.css';
import prjct from './Profile_projects.module.css';

const Profile = () => {
	return (
		<div className={classes.mainContent}>
			<div className={classes.user}>
				<div className={classes.coverPicture}></div>
				<div className={classes.avatar}>
				<div className={classes.avatarContiner}>
					<div className={classes.avatarImage}></div>
					</div>
					<div className={classes.socialNetworks}>
						<div className={classes.socialNetworksInstagram}>
							<a href="#s">
								<img src="/img/icon_instagram.png" alt="icon_instagram.png" />
							</a>
							<a href="#s">
								<div className={classes.socialNetworksTitle}>www.instagram.com/john_smith</div>
							</a>
						</div>
						<div className={classes.socialNetworksTwitter}>
							<a href="#s">
								<img src="/img/icon_twitter.png" alt="icon_twitter.png" />
							</a>
							<a href="#s">
								<div className={classes.socialNetworksTitle}>www.twitter.com/john_smith</div>
							</a>
						</div>
						<div className={classes.socialNetworksFacebook}>
							<a href="#s">
								<img src="/img/icon_facebook.png" alt="icon_facebook.png" />
							</a>
							<a href="#s">
								<div className={classes.socialNetworksTitle}>www.facebook.com/john_smith</div>
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
				<div className={classes.myPosts}>
					<div className={classes.myPostsTitle}>My posts</div>
					<div className={classes.enterPosts}>
						<div className={`${classes.myPostsIconAvatar} ${classes.iconAvatar}`}>
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
						<input className={classes.whatNew} placeholder="What's new?" type="text" />
						<button className={classes.buttonSend}>Send</button>
					</div>
					<div className={classes.post}>
						<div className={classes.post1}>
							<div className={`${classes.post1IconAvatar} ${classes.iconAvatar}`}>
								<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
							</div>
							<div className={classes.post1UserName}>John Smith</div>
							<div className={classes.post1Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!</div>
							<div className={classes.post1Image}></div>
						</div>
						<div className={classes.post2}>
							<div className={`${classes.post2IconAvatar} ${classes.iconAvatar}`}>
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
							<div className={classes.post2UserName}>John Smith</div>
							<div className={classes.post2Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.</div>
							<div className={classes.post2Image}></div></div>
						<div className={classes.post3}>
							<div className={`${classes.post3IconAvatar} ${classes.iconAvatar}`}>
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
							<div className={classes.post3UserName}>John Smith</div>
							<div className={classes.post3Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.</div>
							<div className={classes.post3Image}></div></div>
					</div>
				</div>
				<div className={prjct.myProjects}>
					<div className={prjct.title}>My projects</div>
					<a href="#s" className={prjct.all}>All</a>
					<div className={prjct.items}>
						<div className={prjct.item}>
							<a href="#s" className={prjct.linkImage}>
								<div className={prjct.linkImageContiner}>
									<img src="/img/projects/icon_project_1.png" alt="icon_project_1.png" />
								</div>
							</a>
							<a href="#s" className={prjct.linkProject}>project_1</a>
						</div>
						<div className={prjct.item}>
							<a href="#s" className={prjct.linkImage}>
								<div className={prjct.linkImageContiner}>
									<img src="/img/projects/icon_project_2.png" alt="icon_project_2.png" />
								</div>
							</a>
							<a href="#s" className={prjct.linkProject}>project_2</a>
						</div>
						<div className={prjct.item}>
							<a href="#s" className={prjct.linkImage}>
								<div className={prjct.linkImageContiner}>
									<img src="/img/projects/icon_project_3.png" alt="icon_project_3.png" />
								</div>
							</a>
							<a href="#s" className={prjct.linkProject}>project_3</a>
						</div>
						<div className={prjct.item}>
							<a href="#s" className={prjct.linkImage}>
								<div className={prjct.linkImageContiner}>
									<img src="/img/projects/icon_project_4.png" alt="icon_project_4.png" />
								</div>
							</a>
							<a href="#s" className={prjct.linkProject}>project_4</a>
						</div>
						<div className={prjct.item}>
							<a href="#s" className={prjct.linkImage}>
								<div className={prjct.linkImageContiner}>
									<img src="/img/projects/icon_project_5.png" alt="icon_project_5.png" />
								</div>
							</a>
							<a href="#s" className={prjct.linkProject}>project_5</a>
						</div>
						<div className={prjct.item}>
							<a href="#s" className={prjct.linkImage}>
								<div className={prjct.linkImageContiner}>
									<img src="/img/projects/icon_project_6.png" alt="icon_project_6.png" />
								</div>
							</a>
							<a href="#s" className={prjct.linkProject}>project_6</a>
						</div>
					</div>
				</div>
				<div className={classes.follow}>
					<div className={flrs.followers}>
						<div className={flrs.title}>Followers</div>
						<a href="#s" className={flrs.all}>All</a>
						<div className={flrs.items}>
							<div className={flrs.item}>
								<a href="#s" className={flrs.linkImage}>
									<img src="/img/followers/icon_follower_1.png" alt="icon_follower_1.png" />
								</a>
								<a href="#s" className={flrs.linkName}>name_1</a>
							</div>
							<div className={flrs.item}>
								<a href="#s" className={flrs.linkImage}>
									<img src="/img/followers/icon_follower_2.png" alt="icon_follower_2.png" />
								</a>
								<a href="#s" className={flrs.linkName}>name_2</a>
							</div>
							<div className={flrs.item}>
								<a href="#s" className={flrs.linkImage}>
									<img src="/img/followers/icon_follower_3.png" alt="icon_follower_3.png" />
								</a>
								<a href="#s" className={flrs.linkName}>name_3</a>
							</div>
							<div className={flrs.item}>
								<a href="#s" className={flrs.linkImage}>
									<img src="/img/followers/icon_follower_4.png" alt="icon_follower_4.png" />
								</a>
								<a href="#s" className={flrs.linkName}>name_4</a>
							</div>
							<div className={flrs.item}>
								<a href="#s" className={flrs.linkImage}>
									<img src="/img/followers/icon_follower_5.png" alt="icon_follower_5.png" />
								</a>
								<a href="#s" className={flrs.linkName}>name_5</a>
							</div>
							<div className={flrs.item}>
								<a href="#s" className={flrs.linkImage}>
									<img src="/img/followers/icon_follower_6.png" alt="icon_follower_6.png" />
								</a>
								<a href="#s" className={flrs.linkName}>name_6</a>
							</div>
						</div>
					</div>
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
				<div className={classes.emptyBlock2}></div>
			</div>
		</div>
	);
};

export default Profile;