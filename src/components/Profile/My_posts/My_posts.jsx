
import posts from './../My_posts/My_posts.module.css';

const MyPosts = () => {
	return (
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
							<div className={posts.post2Image}></div>
						</div>
						<div className={posts.post3}>
							<div className={`${posts.post3IconAvatar} ${posts.iconAvatar}`}>
								<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
							</div>
							<div className={posts.post3UserName}>John Smith</div>
							<div className={posts.post3Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.</div>
							<div className={posts.post3Image}></div>
						</div>
					</div>
				</div>
	);
};

export default MyPosts;