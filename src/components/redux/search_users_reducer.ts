import { UsersDataType } from '../../types/types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

/* type ActionType = {
	userId: number
	users: UsersDataType
	totalCount: number
	currentPage: number
	isFetching: boolean
	type: 'FOLLOW' | 'UNFOLLOW' | 'SET_USERS' | 'SET_TOTAL_USERS_COUNT' | 'SET_CURRENT_PAGE' | 'TOGGLE_IS_FETCHING'
} */

const initialState = {
	usersData: [
		/* {
			id: 1,
			userAvatar: require('../../assets/images/search_user_avatar.png'),
			followed: true,
			fullName: 'first_name last_name',
			age: 24,
			status: 'Lorem ipsum dolor sit, amet!',
			location: { countryName: 'country', cityName: 'city' },
		},
		{
			id: 2,
			userAvatar: require('./../images/search_user_avatar.png'),
			followed: true,
			fullName: 'first_name last_name',
			age: 38,
			status: 'Lorem ipsum dolor sit, amet!',
			location: { countryName: 'country', cityName: 'city' },
		},
		{
			id: 3,
			userAvatar: require('./../images/search_user_avatar.png'),
			followed: false,
			fullName: 'first_name last_name',
			age: 41,
			status: 'Lorem ipsum dolor sit, amet!',
			location: { countryName: 'country', cityName: 'city' },
		},
		{
			id: 4,
			userAvatar: require('./../images/search_user_avatar.png'),
			followed: true,
			fullName: 'first_name last_name',
			age: 56,
			status: 'Lorem ipsum dolor sit, amet!',
			location: { countryName: 'country', cityName: 'city' },
		},
		{
			id: 5,
			userAvatar: require('./../images/search_user_avatar.png'),
			followed: false,
			fullName: 'first_name last_name',
			age: 18,
			status: 'Lorem ipsum dolor sit, amet!',
			location: { countryName: 'country', cityName: 'city' },
		},
		{
			id: 6,
			userAvatar: require('./../images/search_user_avatar.png'),
			followed: false,
			fullName: 'first_name last_name',
			age: 32,
			status: 'Lorem ipsum dolor sit, amet!',
			location: { countryName: 'country', cityName: 'city' },
		}, */
	] as Array<UsersDataType>,
	pageSize: 100 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: false as boolean,
};

export type InitialStateType = typeof initialState

const searchUsersReducer = (state = initialState, action: any /* ActionType */): InitialStateType => {

	switch (action.type) {

		case 'FOLLOW':

			return {
				...state,
				usersData: [...state.usersData.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				})],
			};

		case 'UNFOLLOW':

			return {
				...state,
				usersData: [...state.usersData.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}

					return user;
				})],
			};

		case 'SET_USERS':

			return {
				...state, usersData: action.users,
			};

		case 'SET_TOTAL_USERS_COUNT':

			return {
				...state, totalUsersCount: action.totalCount,
			};

		case 'SET_CURRENT_PAGE':

			return {
				...state, currentPage: action.currentPage,

			};

		case 'TOGGLE_IS_FETCHING':

			return {
				...state, isFetching: action.isFetching,

			};

		default:
			return state;
	}
};

type FollowActionCreatorType = {
	type: typeof FOLLOW
	userId: number
}

export const followActionCreator = (userId: number): FollowActionCreatorType => ({ type: FOLLOW, userId });

type UnFollowActionCreatorType = {
	type: typeof UNFOLLOW
	userId: number
}

export const unFollowActionCreator = (userId: number): UnFollowActionCreatorType => ({ type: UNFOLLOW, userId });

type SetUsersActionCreatorType = {
	type: typeof SET_USERS
	users: Array<UsersDataType>
}

export const setUsersActionCreator = (users: Array<UsersDataType>): SetUsersActionCreatorType => ({ type: SET_USERS, users });

type SetTotalUsersCountActionCreatorType = {
	type: typeof SET_TOTAL_USERS_COUNT
	totalCount: number
}

export const setTotalUsersCountActionCreator = (totalCount: number): SetTotalUsersCountActionCreatorType => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

type SetCurrentPageActionCreatorType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}

export const setCurrentPageActionCreator = (currentPage: number): SetCurrentPageActionCreatorType => ({ type: SET_CURRENT_PAGE, currentPage });

type ToggleIsFetchingActionCreatorType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}

export const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionCreatorType => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default searchUsersReducer;
