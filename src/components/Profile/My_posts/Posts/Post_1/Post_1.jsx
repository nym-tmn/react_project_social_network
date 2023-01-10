
import posts from './../Post_1/Post_1.module.css';

const Post1 = () => {
	return (
			<div className={posts.post1}>
				<div className={`${posts.post1IconAvatar} ${posts.iconAvatar}`}>
					<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
				</div>
				<div className={posts.post1UserName}>John Smith</div>
				<div className={posts.post1Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!</div>
				<div className={posts.post1Image}></div>
			</div>
	);
};

export default Post1;