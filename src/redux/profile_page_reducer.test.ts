import {
	PostsDataType,
	FollowDataType,
	MyProjectsDataType,
	ProjectsDemoDataType,
	UserProfileType,
} from '../types/types';
import profileReducer, { actions } from './profile_page_reducer';

const state = {
	postsData: [
		{
			id: 3,
			postIconAvatar: require('../assets/images/avatar_icon.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed provident deserunt autem ab architecto aliquam ipsa dolorem, officiis inventore ratione obcaecati accusantium, ex et adipisci rerum iusto dolor quas debitis incidunt voluptatibus? Quas ea quae non omnis molestias ducimus possimus!',
			postImage: require('../components/images/Posts/post1.png'),
			likesCounter: '15',
		},
		{
			id: 2,
			postIconAvatar: require('../assets/images/avatar_icon.png'),
			postUserName: 'Yurii Nedobrishev',
			postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ipsa quidem dolor adipisci doloribus eum.',
			postImage: require('../components/images/Posts/post2.png'),
			likesCounter: '89',
		},
		{
			id: 1,
			postIconAvatar: require('../assets/images/avatar_icon.png'),
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
	errorMessage: null as null | string,
};

test('length of postsData should be incremented', () => {
	const action = actions.addPostActionCreator('some text');
	const newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(4);
});

test('message of new posts should be correct', () => {
	const action = actions.addPostActionCreator('some text');
	const newState = profileReducer(state, action);
	expect(newState.postsData[0].postText).toBe('some text');
});

// unit test written with help methodology TDD
test('after deleting length of postsData should be decremented', () => {
	const action = actions.deletePostActionCreator(1);
	const newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(2);
});

test('after setting the user profile, profileData should have the expected properties', () => {
	const action = actions.setUserProfileActionCreator({
		aboutMe: '',
		userId: 0,
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: '',
		},
		photos: {
			small: '',
			large: '',
		},
	});
	const newState = profileReducer(state, action);
	expect(newState.profileData).toHaveProperty('userId');
	expect(newState.profileData).toHaveProperty('aboutMe');
	expect(newState.profileData).toHaveProperty('lookingForAJob');
	expect(newState.profileData).toHaveProperty('lookingForAJobDescription');
	expect(newState.profileData).toHaveProperty('fullName');
	expect(newState.profileData).toHaveProperty('contacts');
	expect(newState.profileData).toHaveProperty('photos');
});

test('after setting the user profile, profileData should be truthy', () => {
	const action = actions.setUserProfileActionCreator({
		aboutMe: '',
		userId: 0,
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: '',
		},
		photos: {
			small: '',
			large: '',
		},
	});
	const newState = profileReducer(state, action);
	expect(newState.profileData).toBeTruthy();
});

test('value of isFetching should be changed', () => {
	const action = actions.toggleIsFetchingActionCreator(true);
	const newState = profileReducer(state, action);
	expect(newState.isFetching).toBe(true);
});

test('text of new status should be correct', () => {
	const action = actions.setStatusActionCreator('some status');
	const newState = profileReducer(state, action);
	expect(newState.statusText).toBe('some status');
});

// unit test written with help methodology TDD
test('profileData.photos should has same structure', () => {
	const action = actions.saveUserPhotoSuccessActionCreator({
		small: 'some photos URL',
		large: 'some photos URL',
	});
	const newState = profileReducer(state, action);
	expect(newState.profileData?.photos).toStrictEqual({
		small: 'some photos URL',
		large: 'some photos URL',
	});
});

test('values of profileData.photos should be changed', () => {
	const action = actions.saveUserPhotoSuccessActionCreator({
		small: 'some small photos URL',
		large: 'some large photos URL',
	});
	const newState = profileReducer(state, action);
	expect(newState.profileData?.photos?.large).toBe('some large photos URL');
	expect(newState.profileData?.photos?.small).toBe('some small photos URL');
});

test('error message during uploading photo should be correct', () => {
	const action = actions.setErrorMessageActionCreator('some error message');
	const newState = profileReducer(state, action);
	expect(newState.errorMessage).toBe('some error message');
});

// unit test written with help methodology TDD
test('profileData should has same structure', () => {
	const action = actions.saveProfileDataActionCreator({
		aboutMe: 'some about me information',
		contacts: {
			facebook: 'some URL',
			github: 'some URL',
			instagram: 'some URL',
			mainLink: 'some URL',
			twitter: 'some URL',
			vk: 'some URL',
			website: 'some URL',
			youtube: 'some URL',
		},
		lookingForAJob: true,
		lookingForAJobDescription: 'some information about my professional skills',
		fullName: 'some full name',
	});
	const newState = profileReducer(state, action);
	expect(newState.profileData).toStrictEqual({
		aboutMe: 'some about me information',
		contacts: {
			facebook: 'some URL',
			github: 'some URL',
			instagram: 'some URL',
			mainLink: 'some URL',
			twitter: 'some URL',
			vk: 'some URL',
			website: 'some URL',
			youtube: 'some URL',
		},
		lookingForAJob: true,
		lookingForAJobDescription: 'some information about my professional skills',
		fullName: 'some full name',
	});
});

// unit test written with help methodology TDD
test('values of profileData should be changed', () => {
	const action = actions.saveProfileDataActionCreator({
		aboutMe: 'some about me information',
		contacts: {
			facebook: 'some facebook URL',
			github: 'some github URL',
			instagram: 'some instagram URL',
			mainLink: 'some mainLink URL',
			twitter: 'some twitter URL',
			vk: 'some vk URL',
			website: 'some website URL',
			youtube: 'some youtube URL',
		},
		lookingForAJob: true,
		lookingForAJobDescription: 'some information about my professional skills',
		fullName: 'some full name',
	});
	const newState = profileReducer(state, action);
	expect(newState.profileData?.aboutMe).toBe('some about me information');
	expect(newState.profileData?.lookingForAJob).toBe(true);
	expect(newState.profileData?.lookingForAJobDescription).toBe('some information about my professional skills');
	expect(newState.profileData?.fullName).toBe('some full name');
	expect(newState.profileData?.contacts?.facebook).toBe('some facebook URL');
	expect(newState.profileData?.contacts?.github).toBe('some github URL');
	expect(newState.profileData?.contacts?.instagram).toBe('some instagram URL');
	expect(newState.profileData?.contacts?.mainLink).toBe('some mainLink URL');
	expect(newState.profileData?.contacts?.twitter).toBe('some twitter URL');
	expect(newState.profileData?.contacts?.vk).toBe('some vk URL');
	expect(newState.profileData?.contacts?.website).toBe('some website URL');
	expect(newState.profileData?.contacts?.youtube).toBe('some youtube URL');
});
