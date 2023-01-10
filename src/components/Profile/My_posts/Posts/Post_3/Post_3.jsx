
import classes from './../Post_3/Post_3.module.css';

const Post3 = () => {
	return (
			<div className={classes.post3}>
				<div className={`${classes.post3IconAvatar} ${classes.iconAvatar}`}>
					<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
				</div>
				<div className={classes.post3UserName}>John Smith</div>
				<div className={classes.post3Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.</div>
				<div className={classes.post3Image}></div>
			</div>
	);
};

export default Post3;