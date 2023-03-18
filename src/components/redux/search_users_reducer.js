
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
	usersData: [
		/* {
			id: 1,
			userAvatar: require('./../images/search_user_avatar.png'),
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
	totalCountUsers: 0,
	currentPage: 1,
};

const searchUsersReducer = (state = initialState, action) => {

	switch (action.type) {

		case 'FOLLOW':

			return {
				...state,
				usersData: [...state.usersData.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					};
					return user;
				})],
			};

		case 'UNFOLLOW':

			return {
				...state,
				usersData: [...state.usersData.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					};
					return user;
				})],
			};

		case 'SET-USERS':

			return {
				...state, usersData: action.users,
			};
		
		case 'SET-TOTAL-COUNT-USERS':

			return {
				...state, totalCountUsers: action.totalCount,
				
			};
		
		case 'SET-CURRENT-PAGE':

			return {
				...state, currentPage: action.currentPage,

			};

		default:
			return state;

	}

};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });

export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export const setTotalCountUsersActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT_USERS, totalCount });

export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default searchUsersReducer;