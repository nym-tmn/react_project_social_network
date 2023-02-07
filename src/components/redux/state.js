
let store = {

	_callSubscriber() {
		console.log('State changed');
	},

	_state: {	

		profilePage: {
			postsData: [
				{
					id: 3,
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
					id: 1,
					postIconAvatar: require('./../images/icon_avatar.png'),
					postUserName: 'John Smith',
					postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.',
					postImage: require('./../images/post3.png'),
					likesCounter: '392'
				},
			],
			newPostText: '',
			followersData: [
				{ id: 1, iconFollower: require('./../images/followers/icon_follower_1.png'), name: 'name_1' },
				{ id: 2, iconFollower: require('./../images/followers/icon_follower_2.png'), name: 'name_2' },
				{ id: 3, iconFollower: require('./../images/followers/icon_follower_3.png'), name: 'name_3' },
				{ id: 4, iconFollower: require('./../images/followers/icon_follower_4.png'), name: 'name_4' },
				{ id: 5, iconFollower: require('./../images/followers/icon_follower_5.png'), name: 'name_5' },
				{ id: 6, iconFollower: require('./../images/followers/icon_follower_6.png'), name: 'name_6' },
			],
			followingsData: [
				{ id: 1, iconFollowing: require('./../images/followings/icon_following_1.png'), name: 'name_1' },
				{ id: 2, iconFollowing: require('./../images/followings/icon_following_2.png'), name: 'name_2' },
				{ id: 3, iconFollowing: require('./../images/followings/icon_following_3.png'), name: 'name_3' },
				{ id: 4, iconFollowing: require('./../images/followings/icon_following_4.png'), name: 'name_4' },
				{ id: 5, iconFollowing: require('./../images/followings/icon_following_5.png'), name: 'name_5' },
				{ id: 6, iconFollowing: require('./../images/followings/icon_following_6.png'), name: 'name_6' },
			],
			projectsData: [
				{ id: 1, iconProject: require('./../images/projects/icon_project_1.png'), nameProject: 'project_1' },
				{ id: 2, iconProject: require('./../images/projects/icon_project_2.png'), nameProject: 'project_2' },
				{ id: 3, iconProject: require('./../images/projects/icon_project_3.png'), nameProject: 'project_3' },
				{ id: 4, iconProject: require('./../images/projects/icon_project_4.png'), nameProject: 'project_4' },
				{ id: 5, iconProject: require('./../images/projects/icon_project_5.png'), nameProject: 'project_5' },
				{ id: 6, iconProject: require('./../images/projects/icon_project_6.png'), nameProject: 'project_6' },
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
			newMessageFromMe: '',
			dialogItemData: [
				{ id: 1, name: 'Robert_lastName', avatar: require('./../images/dialog_avatar.png') },
				{ id: 2, name: 'Sophia_lastName', avatar: require('./../images/dialog_avatar.png') },
				{ id: 3, name: 'Alex_lastName', avatar: require('./../images/dialog_avatar.png') },
				{ id: 4, name: 'Andrew_lastName', avatar: require('./../images/dialog_avatar.png') },
				{ id: 5, name: 'John_lastName', avatar: require('./../images/dialog_avatar.png') },
				{ id: 6, name: 'Mary_lastName', avatar: require('./../images/dialog_avatar.png') },
			],
		},

	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	setAddPost() {
		let newPost = {
			id: 4,
			postIconAvatar: require('./../images/icon_avatar.png'),
			postUserName: 'John Smith',
			postText: this._state.profilePage.newPostText,
			likesCounter: '0',
		};

		this._state.profilePage.postsData.unshift(newPost);
		this._state.profilePage.newPostText = '';

		this._callSubscriber(this._state);
	},

	setUpdatePostText(postText) {
		this._state.profilePage.newPostText = postText;

		this._callSubscriber(this._state);
	},

	setAddMessage() {
		let newMessageFromMe = {
			id: 4,
			messageText: this._state.dialogsPage.newMessageFromMe,
		};

		this._state.dialogsPage.messagesFromMeData.push(newMessageFromMe);
		this._state.dialogsPage.newMessageFromMe = '';

		this._callSubscriber(this._state);
	},

	setUpdateMessageText(messageText) {
		this._state.dialogsPage.newMessageFromMe = messageText;

		this._callSubscriber(this._state);
	},

};

window.store = store;

export default store;