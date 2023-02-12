
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
	newPostText: 'new post',
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
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {

		case 'ADD-POST':
			let newPost = {
				id: 4,
				postIconAvatar: require('./../images/icon_avatar.png'),
				postUserName: 'John Smith',
				postText: state.newPostText,
				likesCounter: '0',
			};
			state.postsData.unshift(newPost);
			state.newPostText = '';
			return state;
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newPostText;
			return state;
		default:
			return state;

	}

};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (postText) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: postText });

export default profileReducer;