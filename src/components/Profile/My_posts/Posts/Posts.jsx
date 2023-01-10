
import Post1 from './Post_1/Post_1';
import Post2 from './Post_2/Post_2';
import Post3 from './Post_3/Post_3';

import posts from './Posts.module.css';

const Posts = () => {
	return (
		<div className={posts.post}>
			<Post1 />
			<Post2 />
			<Post3 />
		</div>
	);
};

export default Posts;