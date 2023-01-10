
import classes from './../Enter_posts/Enter_posts.module.css';

const EnterPosts = () => {
	return (
			<div className={classes.enterPosts}>
				<div className={`${classes.iconAvatar} ${classes.iconAvatar}`}>
					<img src="/img/icon_avatar.png" alt="icon_avatar.png" />
				</div>
				<input className={classes.whatNew} placeholder="What's new?" type="text" />
				<button className={classes.buttonSend}>Send</button>
			</div>
	);
};

export default EnterPosts;