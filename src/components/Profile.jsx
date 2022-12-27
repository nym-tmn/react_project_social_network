

const Profile = () => {
	return (
		<div className='main-content'>
			<div className="user">
				<div className="user-cover-picture"></div>
				<div className="user-avatar">
				<div className="user-avatar-continer">
					<div className="user-avatar-image"></div>
					</div>
					<div className="user-social-networks">
						<div className="social-networks-instagram">
							<a href="#">
								<img src="/img/icon_instagram.png" alt="icon_instagram.png" />
							</a>
							<a href="#">
								<div className="social-networks-title">www.instagram.com/john_smith</div>
							</a>
						</div>
						<div className="social-networks-twitter">
							<a href="#">
								<img src="/img/icon_twitter.png" alt="icon_twitter.png" />
							</a>
							<a href="#">
								<div className="social-networks-title">www.twitter.com/john_smith</div>
							</a>
						</div>
						<div className="social-networks-facebook">
							<a href="#">
								<img src="/img/icon_facebook.png" alt="icon_facebook.png" />
							</a>
							<a href="#">
								<div className="social-networks-title">www.facebook.com/john_smith</div>
							</a>
						</div>
					</div>
				</div>
				<div className="user-information">
					<div className="user-name">John Smith</div>
					<div className="user-date-ofBirth">Date of Birth: December 08,1987</div>
					<div className="user-city">City: New York</div>
					<div className="user-education">Education: New York University (NYU)'08</div>
					<div className="user-major">Major: Communication and Journalism</div>
					<div className="user-hobby">Hobby: Photography</div>
					<div className="user-mobile-phone">Mobile phone: +1 212 555 9637</div>
					<div className="user-about-me">About me: Lorem ipsum  corrupti id repudianlendus veniam nihil! Temporibus eveniet soluta repellat sequi ipsam eligendi nam amet .</div>
				</div>
			</div>
			<div className="user-environment">
				<div className="user-environment-my-posts">
					<div className="user-environment-my-posts-title">My posts</div>
					<div className="user-environment-my-posts-enter-posts">
						<div className="user-environment-my-posts-icon-avatar icon-avatar">
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
						<input className="user-environment-my-posts-what-new" placeholder="What's new?" type="text" />
						<button className="user-environment-my-posts-button-send">Send</button>
					</div>
					<div className="user-environment-my-posts-post">
						<div className="user-environment-my-posts-post-post1">
							<div className="user-environment-my-posts-post-post1-icon-avatar icon-avatar">
								<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
							</div>
							<div className="user-environment-my-posts-post-post1-user-name">John Smith</div>
							<div className="user-environment-my-posts-post-post1-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!</div>
							<div className="user-environment-my-posts-post-post1-image"></div>
						</div>
						<div className="user-environment-my-posts-post-post2">
							<div className="user-environment-my-posts-post-post2-icon-avatar icon-avatar">
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
							<div className="user-environment-my-posts-post-post2-user-name">John Smith</div>
							<div className="user-environment-my-posts-post-post2-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.</div>
							<div className="user-environment-my-posts-post-post2-image"></div></div>
						<div className="user-environment-my-posts-post-post3">
							<div className="user-environment-my-posts-post-post3-icon-avatar icon-avatar">
							<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
						</div>
							<div className="user-environment-my-posts-post-post3-user-name">John Smith</div>
							<div className="user-environment-my-posts-post-post3-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.</div>
							<div className="user-environment-my-posts-post-post3-image"></div></div>
					</div>
				</div>
				<div className="user-environment-my-projects">
					<div className="user-environment-my-projects-title">My projects</div>
					<a href="#" className="user-environment-my-projects-all">All</a>
					<div className="user-environment-my-projects-items">
						<div className="user-environment-my-projects-item">
							<a href="#" className="user-environment-my-projects-link-image">
								<div className="user-environment-my-projects-link-image-continer">
									<img src="/img/projects/icon_project_1.png" alt="icon_project_1.png" />
								</div>
							</a>
							<a href="#" className="user-environment-my-projects-link-project">project_1</a>
						</div>
						<div className="user-environment-my-projects-item">
							<a href="#" className="user-environment-my-projects-link-image">
								<div className="user-environment-my-projects-link-image-continer">
									<img src="/img/projects/icon_project_2.png" alt="icon_project_2.png" />
								</div>
							</a>
							<a href="#" className="user-environment-my-projects-link-project">project_2</a>
						</div>
						<div className="user-environment-my-projects-item">
							<a href="#" className="user-environment-my-projects-link-image">
								<div className="user-environment-my-projects-link-image-continer">
									<img src="/img/projects/icon_project_3.png" alt="icon_project_3.png" />
								</div>
							</a>
							<a href="#" className="user-environment-my-projects-link-project">project_3</a>
						</div>
						<div className="user-environment-my-projects-item">
							<a href="#" className="user-environment-my-projects-link-image">
								<div className="user-environment-my-projects-link-image-continer">
									<img src="/img/projects/icon_project_4.png" alt="icon_project_4.png" />
								</div>
							</a>
							<a href="#" className="user-environment-my-projects-link-project">project_4</a>
						</div>
						<div className="user-environment-my-projects-item">
							<a href="#" className="user-environment-my-projects-link-image">
								<div className="user-environment-my-projects-link-image-continer">
									<img src="/img/projects/icon_project_5.png" alt="icon_project_5.png" />
								</div>
							</a>
							<a href="#" className="user-environment-my-projects-link-project">project_5</a>
						</div>
						<div className="user-environment-my-projects-item">
							<a href="#" className="user-environment-my-projects-link-image">
								<div className="user-environment-my-projects-link-image-continer">
									<img src="/img/projects/icon_project_6.png" alt="icon_project_6.png" />
								</div>
							</a>
							<a href="#" className="user-environment-my-projects-link-project">project_6</a>
						</div>
					</div>
				</div>
				<div className="user-environment-follow">
					<div className="user-environment-followers">
						<div className="user-environment-followers-title">Followers</div>
						<a href="#" className="user-environment-followers-all">All</a>
						<div className="user-environment-followers-items">
							<div className="user-environment-followers-item">
								<a href="#" className="user-environment-followers-link-image">
									<img src="/img/followers/icon_follower_1.png" alt="icon_follower_1.png" />
								</a>
								<a href="#" className="user-environment-followers-link-name">name_1</a>
							</div>
							<div className="user-environment-followers-item">
								<a href="#" className="user-environment-followers-link-image">
									<img src="/img/followers/icon_follower_2.png" alt="icon_follower_2.png" />
								</a>
								<a href="#" className="user-environment-followers-link-name">name_2</a>
							</div>
							<div className="user-environment-followers-item">
								<a href="#" className="user-environment-followers-link-image">
									<img src="/img/followers/icon_follower_3.png" alt="icon_follower_3.png" />
								</a>
								<a href="#" className="user-environment-followers-link-name">name_3</a>
							</div>
							<div className="user-environment-followers-item">
								<a href="#" className="user-environment-followers-link-image">
									<img src="/img/followers/icon_follower_4.png" alt="icon_follower_4.png" />
								</a>
								<a href="#" className="user-environment-followers-link-name">name_4</a>
							</div>
							<div className="user-environment-followers-item">
								<a href="#" className="user-environment-followers-link-image">
									<img src="/img/followers/icon_follower_5.png" alt="icon_follower_5.png" />
								</a>
								<a href="#" className="user-environment-followers-link-name">name_5</a>
							</div>
							<div className="user-environment-followers-item">
								<a href="#" className="user-environment-followers-link-image">
									<img src="/img/followers/icon_follower_6.png" alt="icon_follower_6.png" />
								</a>
								<a href="#" className="user-environment-followers-link-name">name_6</a>
							</div>
						</div>
					</div>
					<div className="user-environment-following">
						<div className="user-environment-following-title">Following</div>
						<a href="#" className="user-environment-following-all">All</a>
						<div className="user-environment-following-items">
							<div className="user-environment-following-item">
								<a href="#" className="user-environment-following-link-image">
									<img src="/img/following/icon_following_1.png" alt="icon_following_1.png" />
								</a>
								<a href="#" className="user-environment-following-link-name">name_1</a>
							</div>
							<div className="user-environment-following-item">
								<a href="#" className="user-environment-following-link-image">
									<img src="/img/following/icon_following_2.png" alt="icon_following_2.png" />
								</a>
								<a href="#" className="user-environment-following-link-name">name_2</a>
							</div>
							<div className="user-environment-following-item">
								<a href="#" className="user-environment-following-link-image">
									<img src="/img/following/icon_following_3.png" alt="icon_following_3.png" />
								</a>
								<a href="#" className="user-environment-following-link-name">name_3</a>
							</div>
							<div className="user-environment-following-item">
								<a href="#" className="user-environment-following-link-image">
									<img src="/img/following/icon_following_4.png" alt="icon_following_4.png" />
								</a>
								<a href="#" className="user-environment-following-link-name">name_4</a>
							</div>
							<div className="user-environment-following-item">
								<a href="#" className="user-environment-following-link-image">
									<img src="/img/following/icon_following_5.png" alt="icon_following_5.png" />
								</a>
								<a href="#" className="user-environment-following-link-name">name_5</a>
							</div>
							<div className="user-environment-following-item">
								<a href="#" className="user-environment-following-link-image">
									<img src="/img/following/icon_following_6.png" alt="icon_following_6.png" />
								</a>
								<a href="#" className="user-environment-following-link-name">name_6</a>
							</div>
						</div>
					</div>
				</div>
				<div className="empty-block-2"></div>
			</div>
		</div>
	);
};

export default Profile;