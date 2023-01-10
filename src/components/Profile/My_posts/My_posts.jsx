
import EnterPosts from './Enter_posts/Enter_posts';
import Posts from './Posts/Posts';

import classes from './../My_posts/My_posts.module.css';

const MyPosts = () => {
	return (
		<div className={classes.myPosts}>
			<div className={classes.title}>My posts</div>
			<EnterPosts />
			<Posts />
		</div>
	);
};

export default MyPosts;