
import Posts from './Posts/Posts';

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
			<Posts />
		</div>
	);
};

export default MyPosts;