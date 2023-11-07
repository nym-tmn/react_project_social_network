import { UsersDataType } from '../types/types';
import { InferActionsTypes } from './redux-store';

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

const searchUsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

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

export type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
	followActionCreator: (userId: number) => ({ type: 'FOLLOW', userId } as const),

	unFollowActionCreator: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),

	setUsersActionCreator: (users: Array<UsersDataType>) => ({ type: 'SET_USERS', users } as const),

	setTotalUsersCountActionCreator: (totalCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalCount } as const),

	setCurrentPageActionCreator: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),

	toggleIsFetchingActionCreator: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
};

export default searchUsersReducer;
