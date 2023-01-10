
import posts from './../Post_2/Post_2.module.css';

const Post2 = () => {
	return (
			<div className={posts.post2}>
				<div className={`${posts.post2IconAvatar} ${posts.iconAvatar}`}>
					<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
				</div>
				<div className={posts.post2UserName}>John Smith</div>
				<div className={posts.post2Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.</div>
				<div className={posts.post2Image}></div>
			</div>
	);
};

export default Post2;