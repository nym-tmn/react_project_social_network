
import classes from './../Post_2/Post_2.module.css';

const Post2 = () => {
	return (
			<div className={classes.post2}>
				<div className={`${classes.post2IconAvatar} ${classes.iconAvatar}`}>
					<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
				</div>
				<div className={classes.post2UserName}>John Smith</div>
				<div className={classes.post2Text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.</div>
				<div className={classes.post2Image}></div>
			</div>
	);
};

export default Post2;