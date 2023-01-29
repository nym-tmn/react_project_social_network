
import React from 'react';

import classes from './Message_from_me.module.css';

const MessageFromMe = (props) => {
	return (
		<div className={classes.messagesFromMe}>
			<div><span className={`${classes.message} ${classes.fromMe}`}>Yo!</span></div>
			<div><span className={`${classes.message} ${classes.fromMe}`}>I'm fine!</span></div>
			<div><span className={`${classes.message} ${classes.fromMe}`}>I'm going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.</span></div>
		</div>
	);
}

export default MessageFromMe;