import { Dispatch } from 'redux';
import { InferActionsTypes } from './redux_store';

import {
	FollowersDataType,
	FollowingsDataType,
	MyProjectsDataType,
	PostsDataType,
	ProjectsDemoDataType,
	UserProfileType,
} from '../types/types';
import { profileAPI } from '../api/api';

const initialState = {
	postsData: [
		{
			id: 3,
			postIconAvatar: require('../components/images/icon_avatar1.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!',
			postImage: require('../components/images/Posts/post1.png'),
			likesCounter: '15',
		},
		{
			id: 2,
			postIconAvatar: require('../components/images/icon_avatar1.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.',
			postImage: require('../components/images/Posts/post2.png'),
			likesCounter: '89',
		},
		{
			id: 1,
			postIconAvatar: require('../components/images/icon_avatar1.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.',
			postImage: require('../components/images/Posts/post3.png'),
			likesCounter: '392',
		},
	] as Array<PostsDataType>,
	newPostText: 'new post' as string,
	followersData: [
		{ id: 1, iconFollower: require('../components/images/followers/icon_follower_1.png'), name: 'name_1' },
		{ id: 2, iconFollower: require('../components/images/followers/icon_follower_2.png'), name: 'name_2' },
		{ id: 3, iconFollower: require('../components/images/followers/icon_follower_3.png'), name: 'name_3' },
		{ id: 4, iconFollower: require('../components/images/followers/icon_follower_4.png'), name: 'name_4' },
		{ id: 5, iconFollower: require('../components/images/followers/icon_follower_5.png'), name: 'name_5' },
		{ id: 6, iconFollower: require('../components/images/followers/icon_follower_6.png'), name: 'name_6' },
	] as Array<FollowersDataType>,
	followingsData: [
		{ id: 1, iconFollowing: require('../components/images/followings/icon_following_1.png'), name: 'name_1' },
		{ id: 2, iconFollowing: require('../components/images/followings/icon_following_2.png'), name: 'name_2' },
		{ id: 3, iconFollowing: require('../components/images/followings/icon_following_3.png'), name: 'name_3' },
		{ id: 4, iconFollowing: require('../components/images/followings/icon_following_4.png'), name: 'name_4' },
		{ id: 5, iconFollowing: require('../components/images/followings/icon_following_5.png'), name: 'name_5' },
		{ id: 6, iconFollowing: require('../components/images/followings/icon_following_6.png'), name: 'name_6' },
	] as Array<FollowingsDataType>,
	myProjectsData: [
		{
			id: 1,
			iconMyProject: require('../components/images/my_projects/icon_my_project_1.png'),
			nameMyProject: 'Maket from figma 1',
			linkMyProject: 'https://nym-tmn.github.io/maket_from_figma_1/',
		},
		{
			id: 2,
			iconMyProject: require('../components/images/my_projects/icon_my_project_2.png'),
			nameMyProject: 'My GitHub',
			linkMyProject: 'https://github.com/nym-tmn?tab=repositories',
		},
		{
			id: 3,
			iconMyProject: require('../components/images/my_projects/icon_my_project_3.png'),
			nameMyProject: 'Test task №1',
			linkMyProject: 'https://nym-tmn.github.io/pet_project/',
		},
	] as Array<MyProjectsDataType>,
	projectsDemoData: [
		{ id: 1, iconDemoProject: require('../components/images/demo_projects/icon_demo_project_1.png'), nameDemoProject: 'demo_project_1' },
		{ id: 2, iconDemoProject: require('../components/images/demo_projects/icon_demo_project_2.png'), nameDemoProject: 'demo_project_2' },
		{ id: 3, iconDemoProject: require('../components/images/demo_projects/icon_demo_project_3.png'), nameDemoProject: 'demo_project_3' },
		{ id: 4, iconDemoProject: require('../components/images/demo_projects/icon_demo_project_4.png'), nameDemoProject: 'demo_project_4' },
		{ id: 5, iconDemoProject: require('../components/images/demo_projects/icon_demo_project_5.png'), nameDemoProject: 'demo_project_5' },
		{ id: 6, iconDemoProject: require('../components/images/demo_projects/icon_demo_project_6.png'), nameDemoProject: 'demo_project_6' },
	] as Array<ProjectsDemoDataType>,
	profileData: null as UserProfileType | null,
	isFetching: false as boolean,
	userStatusText: null as null | string,
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

	switch (action.type) {

		case 'ADD_POST':

			const newPost = {
				id: 4,
				postIconAvatar: require('../components/images/icon_avatar1.png'),
				postUserName: 'Yurii Nedobrishev',
				postText: state.newPostText,
				postImage: '',
				likesCounter: '0',
			};

			return {
				...state,
				postsData: [newPost, ...state.postsData],
				newPostText: '',
			};

		case 'UPDATE_NEW_POST_TEXT':

			return {
				...state,
				newPostText: action.newPostText,
			};

		case 'SET_USER_PROFILE':
			return {
				...state, profileData: action.profile,
			};

		case 'TOGGLE_IS_FETCHING':
			return {
				...state, isFetching: action.isFetching,
			};

		case 'SET_STATUS_TEXT':
			return {
				...state, userStatusText: action.statusText,
			};

		default:
			return state;

	}
};

export type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
	addPostActionCreator: () => ({ type: 'ADD_POST' } as const),

	updateNewPostTextActionCreator: (postText: string) => ({ type: 'UPDATE_NEW_POST_TEXT', newPostText: postText } as const),

	setUserProfileActionCreator: (profile: UserProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),

	toggleIsFetchingActionCreator: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),

	setStatusText: (statusText: null | string) => ({ type: 'SET_STATUS_TEXT', statusText } as const),
};

export const getUserProfileThunkCreator = (userId: string | undefined) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		dispatch(actions.toggleIsFetchingActionCreator(true));
		profileAPI.getUserProfile(userId).then((data) => {
			dispatch(actions.toggleIsFetchingActionCreator(false));
			dispatch(actions.setUserProfileActionCreator(data));
			profileAPI.getUserStatus(userId).then((userStatusText) => {
				dispatch(actions.setStatusText(userStatusText));
			});
		});
	};
};

export default profileReducer;
