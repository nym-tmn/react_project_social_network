import React from 'react';

import MyPosts from './My_posts/My_posts';
import Projects from './Projects/Projects';
import Follow from './Follow/Follow';
import { ProfilePropsType } from '../Profile';

import classes from './Environment.module.css';

const Environment: React.FC<Pick<ProfilePropsType, 'isOwner'>> = (props) => {

	return (
		<div className={classes.environment}>
			<MyPosts isOwner={props.isOwner} />
			<Projects />
			<Follow />
		</div>
	);
};

export default Environment;
