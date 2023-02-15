
import React from 'react';
import MyPosts from './My_posts/My_posts';
import MyProjects from './My_projects/My_projects';
import Follow from './Follow/Follow';
import EmptyBlock from './Empty_block/Empty_block';

import classes from './Environment.module.css';

const Environment = (props) => {
	return (
		<div className={classes.environment}>
			<MyPosts store={props.store} />
			<MyProjects store={props.store} />
			<Follow store={props.store} />
			<EmptyBlock />
		</div>
	);
};

export default Environment;