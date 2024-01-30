import { BaseThunkType, InferActionsTypes } from './redux_store';

import { UserAuthDataType } from '../types/types';
import { authAPI, profileAPI } from '../api/api';

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	userAvatar: null,
} as UserAuthDataType;

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {

		case 'SET_AUTH_USER_DATA':
			return {
				...state, ...action.payload, /* isAuth: true, */
			};

		case 'SET_USER_PHOTO':
			return {
				...state, userAvatar: action.userAvatar,
			};

		/* case 'SET_LOGIN_USER':
			return {
				...state, isAuth: true,
			}; */

		/* case 'SET_LOGOUT_USER':
			return {
				...state, isAuth: false,
			}; */

		default:
			return state;

	}
};

export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const actions = {

	setAuthUserDataActionCreator: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
		type: 'SET_AUTH_USER_DATA',
		payload: {
			id,
			email,
			login,
			isAuth,
		},
	} as const),

	setUserAvatarActionCreatorActionCreator: (userAvatar: string) => ({ type: 'SET_USER_PHOTO', userAvatar } as const),

	// setLoginUserActionCreator: () => ({ type: 'SET_LOGIN_USER' } as const),

	// setLogoutUserActionCreator: () => ({ type: 'SET_LOGOUT_USER' } as const),
};

export const authUserThunkCreator = (): ThunkType => async (dispatch) => {
	const authUserData = await authAPI.authUser();
	if (authUserData.data.resultCode === 0) {
		const { id, email, login } = authUserData.data.data;
		dispatch(actions.setAuthUserDataActionCreator(id, email, login, true));
		const userProfileData = await profileAPI.getUserPhoto(id);
		dispatch(actions.setUserAvatarActionCreatorActionCreator(userProfileData.data.photos.small));
	}
};

export const loginUserThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
	const data = await authAPI.loginUser(email, password, rememberMe);
	if (data.data.resultCode === 0) {
		dispatch(authUserThunkCreator());
	}
};

export const logoutUserThunkCreator = (): ThunkType => async (dispatch) => {
	const response = await authAPI.logoutUser();
	if (response.data.resultCode === 0) {
		dispatch(actions.setAuthUserDataActionCreator(null, null, null, false));
	}
};

export default authReducer;
