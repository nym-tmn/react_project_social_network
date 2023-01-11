
import classes from './../Social_network.module.css';

const Twitter = () => {
	return (
			<div className={classes.twitter}>
				<a href="#s">
					<img src="/img/icon_twitter.png" alt="icon_twitter.png" />
				</a>
				<a href="#s">
					<div className={classes.title}>www.twitter.com/john_smith</div>
				</a>
			</div>
	);
};

export default Twitter;