import { UsersDataType } from '../types/types';
import searchUsersReducer, { actions } from './search_users_reducer';

const state = {
	usersData: [{
		name: '',
		id: 1,
		uniqueUrlName: '',
		photos: {
			small: '',
			large: '',
		},
		status: '',
		followed: false,
	},
	{
		name: '',
		id: 2,
		uniqueUrlName: '',
		photos: {
			small: '',
			large: '',
		},
		status: '',
		followed: true,
	}] as Array<UsersDataType>,
	pageSize: 100 as number,
	totalItemsCount: 0 as number,
	currentPage: 1 as number,
	portionSize: 0 as number,
	isFetching: false as boolean,
	followingInProgress: [] as Array<number>,
};

test('after subscription value of usersData[any].followed should be changed to true', () => {
	const action = actions.followActionCreator(1);
	const newState = searchUsersReducer(state, action);
	expect((newState.usersData[0].followed)).toBe(true);
});

test('after subscription value of usersData[any].followed should be changed to false', () => {
	const action = actions.unFollowActionCreator(2);
	const newState = searchUsersReducer(state, action);
	expect((newState.usersData[1].followed)).toBe(false);
});

test('after setting users, usersData should have length more than 0', () => {
	const action = actions.setUsersActionCreator([{
		name: '',
		id: 1,
		uniqueUrlName: '',
		photos: {
			small: '',
			large: '',
		},
		status: '',
		followed: false,
	}]);
	const newState = searchUsersReducer(state, action);
	expect(newState.usersData.length).toBeGreaterThan(0);
});

test('after setting users, usersData[any] should have the expected properties', () => {
	const action = actions.setUsersActionCreator([{
		name: '',
		id: 1,
		uniqueUrlName: '',
		photos: {
			small: '',
			large: '',
		},
		status: '',
		followed: false,
	}]);
	const newState = searchUsersReducer(state, action);
	expect(newState.usersData[0]).toHaveProperty('name');
	expect(newState.usersData[0]).toHaveProperty('id');
	expect(newState.usersData[0]).toHaveProperty('uniqueUrlName');
	expect(newState.usersData[0]).toHaveProperty('photos');
	expect(newState.usersData[0]).toHaveProperty('status');
	expect(newState.usersData[0]).toHaveProperty('followed');
});

test('value of totalUsersCount should be correct', () => {
	const action = actions.setTotalItemsCountActionCreator(20);
	const newState = searchUsersReducer(state, action);
	expect(newState.totalItemsCount).toBe(20);
});

test('value of currentPage should be correct', () => {
	const action = actions.setCurrentPageActionCreator(5);
	const newState = searchUsersReducer(state, action);
	expect(newState.currentPage).toBe(5);
});

test('value of currentPage should be more than 0', () => {
	const action = actions.setCurrentPageActionCreator(1);
	const newState = searchUsersReducer(state, action);
	expect(newState.currentPage).toBeGreaterThan(0);
});

test('value of isFetching should be changed', () => {
	const action = actions.toggleIsFetchingActionCreator(true);
	const newState = searchUsersReducer(state, action);
	expect(newState.isFetching).toBe(true);
});

test('if value of isFetching true then length of followingInProgress should be 1', () => {
	const action = actions.toggleFollowingProgressActionCreator(true, 1);
	const newState = searchUsersReducer(state, action);
	expect(newState.followingInProgress).toHaveLength(1);
});

test('if value of isFetching false then length of followingInProgress should be 0', () => {
	const action = actions.toggleFollowingProgressActionCreator(false, 1);
	const newState = searchUsersReducer(state, action);
	expect(newState.followingInProgress).toHaveLength(0);
});
