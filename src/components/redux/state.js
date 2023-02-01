
let state = {

	profilePage: {
		postsData: [
			{
				id: 1,
				postIconAvatar: require('./../images/icon_avatar.png'),
				postUserName: 'John Smith',
				postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!',
				postImage: require('./../images/post1.png'),
				likesCounter: '15'
			},
			{
				id: 2,
				postIconAvatar: require('./../images/icon_avatar.png'),
				postUserName: 'John Smith',
				postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.',
				postImage: require('./../images/post2.png'),
				likesCounter: '89'
			},
			{
				id: 3,
				postIconAvatar: require('./../images/icon_avatar.png'),
				postUserName: 'John Smith',
				postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.',
				postImage: require('./../images/post3.png'),
				likesCounter: '392'
			},
		],
		followersData: [
			{id: 1, iconFollower: require('./../images/followers/icon_follower_1.png'), name: 'name_1'},
			{id: 2, iconFollower: require('./../images/followers/icon_follower_2.png'), name: 'name_2'},
			{id: 3, iconFollower: require('./../images/followers/icon_follower_3.png'), name: 'name_3'},
			{id: 4, iconFollower: require('./../images/followers/icon_follower_4.png'), name: 'name_4'},
			{id: 5, iconFollower: require('./../images/followers/icon_follower_5.png'), name: 'name_5'},
			{id: 6, iconFollower: require('./../images/followers/icon_follower_6.png'), name: 'name_6'},
		],
	},

	dialogsPage: {
		messagesToMeData: [
			{ id: 1, messageText: 'Yo!' },
			{ id: 2, messageText: 'I am fine!' },
			{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
		],
		messagesFromMeData: [
			{ id: 1, messageText: 'Yo!' },
			{ id: 2, messageText: 'I am fine!' },
			{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
		],
		dialogItemData: [
			{ id: 1, name: 'Robert_lastName', avatar: require('./../images/dialog_avatar.png') },
			{ id: 2, name: 'Sophia_lastName', avatar: require('./../images/dialog_avatar.png') },
			{ id: 3, name: 'Alex_lastName', avatar: require('./../images/dialog_avatar.png') },
			{ id: 4, name: 'Andrew_lastName', avatar: require('./../images/dialog_avatar.png') },
			{ id: 5, name: 'John_lastName', avatar: require('./../images/dialog_avatar.png') },
			{ id: 6, name: 'Mary_lastName', avatar: require('./../images/dialog_avatar.png') },
		],
	},

};

export default state;