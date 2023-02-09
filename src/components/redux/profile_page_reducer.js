
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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