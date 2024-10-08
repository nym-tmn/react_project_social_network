/* eslint-disable no-console */
import { BaseThunkType, InferActionsTypes } from './redux_store';
import {
	FollowDataType,
	MyProjectsDataType,
	PhotosType,
	PostsDataType,
	ProjectsDemoDataType,
	UserProfileType,
} from '../types/types';
import { profileAPI } from '../api/api';
import { authUserThunkCreator } from './auth_reducer';

const initialState = {
	postsData: [
		{
			id: 3,
			postIconAvatar: require('../assets/images/avatar_icon.png'),
			postUserName: null,
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!',
			postImage: require('../assets/images/Posts/post1.png'),
			likesCounter: '15',
		},
		{
			id: 2,
			postIconAvatar: require('../assets/images/avatar_icon.png'),
			postUserName: null,
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.',
			postImage: require('../assets/images/Posts/post2.png'),
			likesCounter: '89',
		},
		{
			id: 1,
			postIconAvatar: require('../assets/images/avatar_icon.png'),
			postUserName: null,
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque fugiat quis commodi placeat, cum nostrum consequuntur exercitationem fugit sunt distinctio.',
			postImage: require('../assets/images/Posts/post3.png'),
			likesCounter: '392',
		},
	] as Array<PostsDataType>,
	followersData: [
		{ id: 1, iconFollow: require('../assets/images/followers/icon_follower_1.png'), name: 'name_1' },
		{ id: 2, iconFollow: require('../assets/images/followers/icon_follower_2.png'), name: 'name_2' },
		{ id: 3, iconFollow: require('../assets/images/followers/icon_follower_3.png'), name: 'name_3' },
		{ id: 4, iconFollow: require('../assets/images/followers/icon_follower_4.png'), name: 'name_4' },
		{ id: 5, iconFollow: require('../assets/images/followers/icon_follower_5.png'), name: 'name_5' },
		{ id: 6, iconFollow: require('../assets/images/followers/icon_follower_6.png'), name: 'name_6' },
	] as Array<FollowDataType>,
	followingsData: [
		{ id: 1, iconFollow: require('../assets/images/followings/icon_following_1.png'), name: 'name_1' },
		{ id: 2, iconFollow: require('../assets/images/followings/icon_following_2.png'), name: 'name_2' },
		{ id: 3, iconFollow: require('../assets/images/followings/icon_following_3.png'), name: 'name_3' },
		{ id: 4, iconFollow: require('../assets/images/followings/icon_following_4.png'), name: 'name_4' },
		{ id: 5, iconFollow: require('../assets/images/followings/icon_following_5.png'), name: 'name_5' },
		{ id: 6, iconFollow: require('../assets/images/followings/icon_following_6.png'), name: 'name_6' },
	] as Array<FollowDataType>,
	myProjectsData: [
		{
			id: 1,
			iconMyProject: require('../assets/images/my_projects/icon_my_project_1.png'),
			nameMyProject: 'Maket from figma 1',
			linkMyProject: 'https://nym-tmn.github.io/maket_from_figma_1/',
		},
		{
			id: 2,
			iconMyProject: require('../assets/images/my_projects/icon_my_project_2.png'),
			nameMyProject: 'My GitHub',
			linkMyProject: 'https://github.com/nym-tmn?tab=repositories',
		},
		{
			id: 3,
			iconMyProject: require('../assets/images/my_projects/icon_my_project_3.png'),
			nameMyProject: 'Test task №1',
			linkMyProject: 'https://nym-tmn.github.io/01_test_task/',
		},
	] as Array<MyProjectsDataType>,
	projectsDemoData: [
		{ id: 1, iconDemoProject: require('../assets/images/demo_projects_icons/icon_demo_project_1.png'), nameDemoProject: 'demo_project_1' },
		{ id: 2, iconDemoProject: require('../assets/images/demo_projects_icons/icon_demo_project_2.png'), nameDemoProject: 'demo_project_2' },
		{ id: 3, iconDemoProject: require('../assets/images/demo_projects_icons/icon_demo_project_3.png'), nameDemoProject: 'demo_project_3' },
		{ id: 4, iconDemoProject: require('../assets/images/demo_projects_icons/icon_demo_project_4.png'), nameDemoProject: 'demo_project_4' },
		{ id: 5, iconDemoProject: require('../assets/images/demo_projects_icons/icon_demo_project_5.png'), nameDemoProject: 'demo_project_5' },
		{ id: 6, iconDemoProject: require('../assets/images/demo_projects_icons/icon_demo_project_6.png'), nameDemoProject: 'demo_project_6' },
	] as Array<ProjectsDemoDataType>,
	profileData: null as UserProfileType | null,
	isFetching: false as boolean,
	statusText: null as null | string,
	errorMessage: null as null | string,
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {

		case 'SN/PROFILE_PAGE/ADD_POST':
			return {
				...state,
				postsData: [{
					id: state.postsData.length + 1,
					postIconAvatar: require('../assets/images/avatar_icon.png'),
					postUserName: null,
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
				...state,
				profileData: action.profile,
			};

		case 'SN/PROFILE_PAGE/TOGGLE_IS_FETCHING':
			return {
				...state, isFetching: action.isFetching,
			};

		case 'SN/PROFILE_PAGE/SET_STATUS':
			return {
				...state, statusText: action.statusText,
			};

		case 'SN/PROFILE_PAGE/SAVE_USER_PHOTO':
			return {
				...state,
				profileData: {
					...state.profileData,
					photos: action.photos,
				},
			};

		case 'SN/PROFILE_PAGE/SET_ERROR_MESSAGE':
			return {
				...state, errorMessage: action.errorMessage,
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

	saveUserPhotoSuccessActionCreator: (photos: PhotosType) => ({ type: 'SN/PROFILE_PAGE/SAVE_USER_PHOTO', photos } as const),

	setErrorMessageActionCreator: (errorMessage: string | null) => ({ type: 'SN/PROFILE_PAGE/SET_ERROR_MESSAGE', errorMessage } as const),
};

export const getUserProfileThunkCreator = (userId: string | undefined): ThunkType => async (dispatch) => {
	try {
		dispatch(actions.toggleIsFetchingActionCreator(true));
		const response = await profileAPI.getUserProfile(userId);
		dispatch(actions.toggleIsFetchingActionCreator(false));
		dispatch(actions.setUserProfileActionCreator(response.data));
	} catch (e: any) {
		console.error(e.message);
	}
};

export const getUserStatusThunkCreator = (userId: string | undefined): ThunkType => async (dispatch) => {
	try {
		const response = await profileAPI.getUserStatus(userId);
		dispatch(actions.setStatusActionCreator(response.data));
	} catch (e: any) {
		console.error(e.message);
	}
};

export const updateUserStatusThunkCreator = (statusText: string | null): ThunkType => async (dispatch) => {
	try {
		const response = await profileAPI.updateUserStatus(statusText);
		if (response.data.resultCode === 0) {
			dispatch(actions.setStatusActionCreator(statusText));
		}
	} catch (e: any) {
		console.error(e.message);
	}
};

export const saveUserPhotoThunkCreator = (photos: string | Blob): ThunkType => async (dispatch) => {
	try {
		const response = await profileAPI.uploadUserPhoto(photos);
		if (response.data.resultCode === 0) {
			dispatch(actions.saveUserPhotoSuccessActionCreator(response.data.data.photos));
			dispatch(authUserThunkCreator());
			dispatch(actions.setErrorMessageActionCreator(null));
		} else if (response.data.resultCode === 1) {
			const [errorMessage] = response.data.messages;
			dispatch(actions.setErrorMessageActionCreator(errorMessage));
			setTimeout(() => {
				dispatch(actions.setErrorMessageActionCreator(null));
			}, 5000);
		}
	} catch (e: any) {
		console.error(e.message);
	}
};

export const saveProfileDataThunkCreator = (profile: UserProfileType): ThunkType => async (dispatch, getState) => {
	try {
		const userId = getState().auth.id;
		const response = await profileAPI.saveProfileData(profile);
		if (response.data.resultCode === 0) {
			dispatch(getUserProfileThunkCreator(userId?.toString()));
		}
	} catch (e: any) {
		console.error(e.message);
	}
};

export default profileReducer;
