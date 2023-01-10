
import MyPosts from './My_posts/My_posts';
import MyProjects from './My_projects/My_projects';
import Follow from './Follow/Follow';
import EmptyBlock from './Empty_block/Empty_block';

import classes from './Environment.module.css';

const Environment = () => {
	return (
		<div className={classes.environment}>
			<MyPosts />
			<MyProjects />
			<Follow />
			<EmptyBlock />
		</div>
	);
};

export default Environment;