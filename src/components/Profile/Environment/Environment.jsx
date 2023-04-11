
import React from 'react';
import MyPosts from './My_posts/My_posts';
import Projects from './Projects/Projects';
import Follow from './Follow/Follow';

import classes from './Environment.module.css';

const Environment = () => {
	return (
		<div className={classes.environment}>
			<MyPosts />
			<Projects />
			<Follow />
		</div>
	);
};

export default Environment;