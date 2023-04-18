const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
	],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
};

const searchUsersReducer = (state = initialState, action) => {

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

export const followActionCreator = userId => ({ type: FOLLOW, userId });

export const unFollowActionCreator = userId => ({ type: UNFOLLOW, userId });

export const setUsersActionCreator = users => ({ type: SET_USERS, users });

export const setTotalUsersCountActionCreator = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

export const setCurrentPageActionCreator = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });

export const toggleIsFetchingActionCreator = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default searchUsersReducer;
