
import React from 'react';
import SendMessages from './Send_messages/Send_messages';

import classes from './Messages.module.css';

const Messages = (props) => {
	return (
		<div className={classes.messages}>
			<div className={classes.messagesToMe}>
				<div><span className={`${classes.message} ${classes.toMe}`}>Hi!</span></div>
				<div><span className={`${classes.message} ${classes.toMe}`}>How are you?</span></div>
				<div><span className={`${classes.message} ${classes.toMe}`}>What are you doing? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias odit fugiat facere id quae voluptatem voluptatibus ullam repudiandae recusandae, praesentium numquam voluptas quisquam sed ducimus amet dolorem architecto soluta eveniet, quasi eos, sapiente perferendis deserunt. Consequatur soluta ipsam, voluptate exercitationem, fuga quam, corporis laudantium nulla itaque perferendis ipsum maxime?</span></div>
			</div>
			<div className={classes.messagesFromMe}>
				<div><span className={`${classes.message} ${classes.fromMe}`}>Yo!</span></div>
				<div><span className={`${classes.message} ${classes.fromMe}`}>I'm fine!</span></div>
				<div><span className={`${classes.message} ${classes.fromMe}`}>I'm going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.</span></div>
			</div>
			<SendMessages/>
		</div>
	);
}

export default Messages;