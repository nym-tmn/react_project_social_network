import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
	{
		id: 1,
		postIconAvatar: require('./components/images/icon_avatar.png'),
		postUserName: 'John Smith',
		postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!',
		postImage: require('./components/images/post1.png'),
		likesCounter: '15'
	},
	{
		id: 2,
		postIconAvatar: require('./components/images/icon_avatar.png'),
		postUserName: 'John Smith',
		postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.',
		postImage: require('./components/images/post2.png'),
		likesCounter: '89'
	},
	{
		id: 3,
		postIconAvatar: require('./components/images/icon_avatar.png'),
		postUserName: 'John Smith',
		postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.',
		postImage: require('./components/images/post3.png'),
		likesCounter: '392'
	},
];

let messagesToMeData = [
	{ id: 1, messageText: 'Hi!' },
	{ id: 2, messageText: 'How are you?' },
	{ id: 3, messageText: 'What are you doing? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias odit fugiat facere id quae voluptatem voluptatibus ullam repudiandae recusandae, praesentium numquam voluptas quisquam sed ducimus amet dolorem architecto soluta eveniet, quasi eos, sapiente perferendis deserunt. Consequatur soluta ipsam, voluptate exercitationem, fuga quam, corporis laudantium nulla itaque perferendis ipsum maxime?' },
];

let messagesFromMeData = [
	{ id: 1, messageText: 'Yo!' },
	{ id: 2, messageText: 'I am fine!' },
	{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
];

let dialogItemData = [
	{ id: 1, name: 'Robert_lastName', avatar: require('./components/images/dialog_avatar.png') },
	{ id: 2, name: 'Sophia_lastName', avatar: require('./components/images/dialog_avatar.png') },
	{ id: 3, name: 'Alex_lastName', avatar: require('./components/images/dialog_avatar.png') },
	{ id: 4, name: 'Andrew_lastName', avatar: require('./components/images/dialog_avatar.png') },
	{ id: 5, name: 'John_lastName', avatar: require('./components/images/dialog_avatar.png') },
	{ id: 6, name: 'Mary_lastName', avatar: require('./components/images/dialog_avatar.png') },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App posts={postsData} dialogItem={dialogItemData} messageToMe={messagesToMeData} messageFromMe={messagesFromMeData} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
