
import React from 'react';
import MessageToMe from './Message_to_me/Message_to_me';
import MessageFromMe from './Message_from_me/Message_from_me';
import SendMessages from './Send_messages/Send_messages';

import classes from './Messages.module.css';

const Messages = (props) => {

	let messagesToMeData = [
		{ id: 1, messageText: 'Hi!' },
		{ id: 2, messageText: 'How are you?' },
		{ id: 3, messageText: 'What are you doing? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias odit fugiat facere id quae voluptatem voluptatibus ullam repudiandae recusandae, praesentium numquam voluptas quisquam sed ducimus amet dolorem architecto soluta eveniet, quasi eos, sapiente perferendis deserunt. Consequatur soluta ipsam, voluptate exercitationem, fuga quam, corporis laudantium nulla itaque perferendis ipsum maxime?' },
	];

	let messagesToMeElements = messagesToMeData
		.map(message => <MessageToMe message={message.messageText} />);

	let messagesFromMeData = [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	];

	let messagesFromMeElements = messagesFromMeData
		.map(message => <MessageFromMe message={message.messageText} />);

	return (
		<div className={classes.messages}>
			<div className={classes.messagesToMe}>
				{messagesToMeElements}
			</div>
			<div className={classes.messagesFromMe}>
				{messagesFromMeElements}
			</div>
			<SendMessages />
		</div>
	);
}

export default Messages;