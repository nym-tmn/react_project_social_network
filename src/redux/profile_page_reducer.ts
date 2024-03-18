import { BaseThunkType, InferActionsTypes } from './redux_store';

import {
	FollowDataType,
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
			postIconAvatar: require('../components/images/post_avatar.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!',
			postImage: require('../components/images/Posts/post1.png'),
			likesCounter: '15',
		},
		{
			id: 2,
			postIconAvatar: require('../components/images/post_avatar.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.',
			postImage: require('../components/images/Posts/post2.png'),
			likesCounter: '89',
		},
		{
			id: 1,
			postIconAvatar: require('../components/images/post_avatar.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.',
			postImage: require('../components/images/Posts/post3.png'),
			likesCounter: '392',
		},
	] as Array<PostsDataType>,
	followersData: [
		{ id: 1, iconFollow: require('../components/images/followers/icon_follower_1.png'), name: 'name_1' },
		{ id: 2, iconFollow: require('../components/images/followers/icon_follower_2.png'), name: 'name_2' },
		{ id: 3, iconFollow: require('../components/images/followers/icon_follower_3.png'), name: 'name_3' },
		{ id: 4, iconFollow: require('../components/images/followers/icon_follower_4.png'), name: 'name_4' },
		{ id: 5, iconFollow: require('../components/images/followers/icon_follower_5.png'), name: 'name_5' },
		{ id: 6, iconFollow: require('../components/images/followers/icon_follower_6.png'), name: 'name_6' },
	] as Array<FollowDataType>,
	followingsData: [
		{ id: 1, iconFollow: require('../components/images/followings/icon_following_1.png'), name: 'name_1' },
		{ id: 2, iconFollow: require('../components/images/followings/icon_following_2.png'), name: 'name_2' },
		{ id: 3, iconFollow: require('../components/images/followings/icon_following_3.png'), name: 'name_3' },
		{ id: 4, iconFollow: require('../components/images/followings/icon_following_4.png'), name: 'name_4' },
		{ id: 5, iconFollow: require('../components/images/followings/icon_following_5.png'), name: 'name_5' },
		{ id: 6, iconFollow: require('../components/images/followings/icon_following_6.png'), name: 'name_6' },
	] as Array<FollowDataType>,
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
	statusText: null as null | string,
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {

		case 'SN/PROFILE_PAGE/ADD_POST':
			/* const newPost = {
				id: 4,
				postIconAvatar: require('../components/images/post_avatar.png'),
				postUserName: 'Yurii Nedobrishev',
				postText: action.newPostText,
				postImage: '',
				likesCounter: '0',
			};
 */
			return {
				...state,
				postsData: [{
					id: state.postsData.length + 1,
					postIconAvatar: require('../components/images/post_avatar.png'),
					postUserName: 'Yurii Nedobrishev',
					postText: action.newPostText,
					postImage: '',
					likesCounter: '0',
				},
					...state.postsData],
			};

		case 'SN/PROFILE_PAGE/DELETE_POST':
			return {
				...state, postsData: state.postsData.filter(p => p.id !== action.postId),
			};

		case 'SN/PROFILE_PAGE/SET_USER_PROFILE':
			return {
				...state, profileData: action.profile,
			};

		case 'SN/PROFILE_PAGE/TOGGLE_IS_FETCHING':
			return {
				...state, isFetching: action.isFetching,
			};

		case 'SN/PROFILE_PAGE/SET_STATUS':
			return {
				...state, statusText: action.statusText,
			};

		default:
			return state;

	}
};

export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export const actions = {
	addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE_PAGE/ADD_POST', newPostText } as const),

	setUserProfileActionCreator: (profile: UserProfileType) => ({ type: 'SN/PROFILE_PAGE/SET_USER_PROFILE', profile } as const),

	toggleIsFetchingActionCreator: (isFetching: boolean) => ({ type: 'SN/PROFILE_PAGE/TOGGLE_IS_FETCHING', isFetching } as const),

	setStatusActionCreator: (statusText: null | string) => ({ type: 'SN/PROFILE_PAGE/SET_STATUS', statusText } as const),

	deletePostActionCreator: (postId: number) => ({ type: 'SN/PROFILE_PAGE/DELETE_POST', postId } as const),
};

export const getUserProfileThunkCreator = (userId: string | undefined): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFetchingActionCreator(true));
	const response = await profileAPI.getUserProfile(userId);
	dispatch(actions.toggleIsFetchingActionCreator(false));
	dispatch(actions.setUserProfileActionCreator(response.data));
};

export const getUserStatusThunkCreator = (userId: string | undefined): ThunkType => async (dispatch) => {
	const response = await profileAPI.getUserStatus(userId);
	dispatch(actions.setStatusActionCreator(response.data));
};

export const updateUserStatusThunkCreator = (statusText: string | null): ThunkType => async (dispatch) => {
	const response = await profileAPI.updateUserStatus(statusText);
	if (response.data.resultCode === 0) {
		dispatch(actions.setStatusActionCreator(statusText));
	}
};

export default profileReducer;
