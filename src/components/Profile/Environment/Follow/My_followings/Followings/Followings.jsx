
import Following1 from './Following_1/Following_1';
import Following2 from './Following_2/Following_2';
import Following3 from './Following_3/Following_3';
import Following4 from './Following_4/Following_4';
import Following5 from './Following_5/Following_5';
import Following6 from './Following_6/Following_6';

import classes from './Followings.module.css';

const Followings = () => {
	return (
		<div className={classes.items}>
			<Following1/>
			<Following2/>
			<Following3/>
			<Following4/>
			<Following5/>
			<Following6/>
		</div>
	);
};

export default Followings;