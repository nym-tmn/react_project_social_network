
import React from 'react';
import Post from './Post/Post';

import classes from './Posts.module.css';

const Posts = (props) => {
	return (
		<div className={classes.posts}>
			<Post
				postIconAvatar={require('./../../../../images/icon_avatar.png')}
				postUserName='John Smith'
				postText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur 
							adipisicing elit. Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto 
							dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!'
				postImage={require('./../../../../images/post1.png')}
				likesCounter='15' />
			<Post
				postIconAvatar={require('./../../../../images/icon_avatar.png')}
				postUserName='John Smith'
				postText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.'
				postImage={require('./../../../../images/post2.png')}
				likesCounter='89' />
			<Post
				postIconAvatar={require('./../../../../images/icon_avatar.png')}
				postUserName='John Smith'
				postText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur 
							adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.'
				postImage={require('./../../../../images/post3.png')}
				likesCounter='392' />
		</div>
	);
};

export default Posts;