
import classes from './Profile.module.css';

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
				<div className={classes.myProjects}>
					<div className={classes.myProjectsTitle}>My projects</div>
					<a href="#s" className={classes.myProjectsAll}>All</a>
					<div className={classes.myProjectsItems}>
						<div className={classes.myProjectsItem}>
							<a href="#s" className={classes.myProjectsLinkImage}>
								<div className={classes.myProjectsLinkImageContiner}>
									<img src="/img/projects/icon_project_1.png" alt="icon_project_1.png" />
								</div>
							</a>
							<a href="#s" className={classes.myProjectsLinkProject}>project_1</a>
						</div>
						<div className={classes.myProjectsItem}>
							<a href="#s" className={classes.myProjectsLinkImage}>
								<div className={classes.myProjectsLinkImageContiner}>
									<img src="/img/projects/icon_project_2.png" alt="icon_project_2.png" />
								</div>
							</a>
							<a href="#s" className={classes.myProjectsLinkProject}>project_2</a>
						</div>
						<div className={classes.myProjectsItem}>
							<a href="#s" className={classes.myProjectsLinkImage}>
								<div className={classes.myProjectsLinkImageContiner}>
									<img src="/img/projects/icon_project_3.png" alt="icon_project_3.png" />
								</div>
							</a>
							<a href="#s" className={classes.myProjectsLinkProject}>project_3</a>
						</div>
						<div className={classes.myProjectsItem}>
							<a href="#s" className={classes.myProjectsLinkImage}>
								<div className={classes.myProjectsLinkImageContiner}>
									<img src="/img/projects/icon_project_4.png" alt="icon_project_4.png" />
								</div>
							</a>
							<a href="#s" className={classes.myProjectsLinkProject}>project_4</a>
						</div>
						<div className={classes.myProjectsItem}>
							<a href="#s" className={classes.myProjectsLinkImage}>
								<div className={classes.myProjectsLinkImageContiner}>
									<img src="/img/projects/icon_project_5.png" alt="icon_project_5.png" />
								</div>
							</a>
							<a href="#s" className={classes.myProjectsLinkProject}>project_5</a>
						</div>
						<div className={classes.myProjectsItem}>
							<a href="#s" className={classes.myProjectsLinkImage}>
								<div className={classes.myProjectsLinkImageContiner}>
									<img src="/img/projects/icon_project_6.png" alt="icon_project_6.png" />
								</div>
							</a>
							<a href="#s" className={classes.myProjectsLinkProject}>project_6</a>
						</div>
					</div>
				</div>
				<div className={classes.follow}>
					<div className={classes.followers}>
						<div className={classes.followersTitle}>Followers</div>
						<a href="#s" className={classes.followersAll}>All</a>
						<div className={classes.followersItems}>
							<div className={classes.followersItem}>
								<a href="#s" className={classes.followersLinkImage}>
									<img src="/img/followers/icon_follower_1.png" alt="icon_follower_1.png" />
								</a>
								<a href="#s" className={classes.followersLinkName}>name_1</a>
							</div>
							<div className={classes.followersItem}>
								<a href="#s" className={classes.followersLinkImage}>
									<img src="/img/followers/icon_follower_2.png" alt="icon_follower_2.png" />
								</a>
								<a href="#s" className={classes.followersLinkName}>name_2</a>
							</div>
							<div className={classes.followersItem}>
								<a href="#s" className={classes.followersLinkImage}>
									<img src="/img/followers/icon_follower_3.png" alt="icon_follower_3.png" />
								</a>
								<a href="#s" className={classes.followersLinkName}>name_3</a>
							</div>
							<div className={classes.followersItem}>
								<a href="#s" className={classes.followersLinkImage}>
									<img src="/img/followers/icon_follower_4.png" alt="icon_follower_4.png" />
								</a>
								<a href="#s" className={classes.followersLinkName}>name_4</a>
							</div>
							<div className={classes.followersItem}>
								<a href="#s" className={classes.followersLinkImage}>
									<img src="/img/followers/icon_follower_5.png" alt="icon_follower_5.png" />
								</a>
								<a href="#s" className={classes.followersLinkName}>name_5</a>
							</div>
							<div className={classes.followersItem}>
								<a href="#s" className={classes.followersLinkImage}>
									<img src="/img/followers/icon_follower_6.png" alt="icon_follower_6.png" />
								</a>
								<a href="#s" className={classes.followersLinkName}>name_6</a>
							</div>
						</div>
					</div>
					<div className={classes.following}>
						<div className={classes.followingTitle}>Following</div>
						<a href="#s" className={classes.followingAll}>All</a>
						<div className={classes.followingItems}>
							<div className={classes.followingItem}>
								<a href="#s" className={classes.followingLinkImage}>
									<img src="/img/following/icon_following_1.png" alt="icon_following_1.png" />
								</a>
								<a href="#s" className={classes.followingLinkName}>name_1</a>
							</div>
							<div className={classes.followingItem}>
								<a href="#s" className={classes.followingLinkImage}>
									<img src="/img/following/icon_following_2.png" alt="icon_following_2.png" />
								</a>
								<a href="#s" className={classes.followingLinkName}>name_2</a>
							</div>
							<div className={classes.followingItem}>
								<a href="#s" className={classes.followingLinkImage}>
									<img src="/img/following/icon_following_3.png" alt="icon_following_3.png" />
								</a>
								<a href="#s" className={classes.followingLinkName}>name_3</a>
							</div>
							<div className={classes.followingItem}>
								<a href="#s" className={classes.followingLinkImage}>
									<img src="/img/following/icon_following_4.png" alt="icon_following_4.png" />
								</a>
								<a href="#s" className={classes.followingLinkName}>name_4</a>
							</div>
							<div className={classes.followingItem}>
								<a href="#s" className={classes.followingLinkImage}>
									<img src="/img/following/icon_following_5.png" alt="icon_following_5.png" />
								</a>
								<a href="#s" className={classes.followingLinkName}>name_5</a>
							</div>
							<div className={classes.followingItem}>
								<a href="#s" className={classes.followingLinkImage}>
									<img src="/img/following/icon_following_6.png" alt="icon_following_6.png" />
								</a>
								<a href="#s" className={classes.followingLinkName}>name_6</a>
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