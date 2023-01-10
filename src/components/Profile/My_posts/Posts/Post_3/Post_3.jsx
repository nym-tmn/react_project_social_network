
import posts from './../Post_3/Post_3.module.css';

const Post3 = () => {
	return (
			<div className={posts.post3}>
				<div className={`${posts.post3IconAvatar} ${posts.iconAvatar}`}>
					<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
				</div>
				<div className={posts.post3UserName}>John Smith</div>
				<div className={posts.post3Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.</div>
				<div className={posts.post3Image}></div>
			</div>
	);
};

export default Post3;