import { BaseThunkType, InferActionsTypes } from './redux_store';

import { UserAuthDataType } from '../types/types';
import { authAPI, profileAPI } from '../api/api';

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	userAvatar: null,
	errorMessage: null,
	captcha: null,
} as UserAuthDataType;

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {

		case 'SN/AUTH/SET_AUTH_USER_DATA':
			return {
				...state, ...action.payload,
			};

		case 'SN/AUTH/SET_USER_PHOTO':
			return {
				...state, userAvatar: action.userAvatar,
			};

		case 'SN/AUTH/SET_ERROR_MESSAGE':
			return {
				...state, errorMessage: action.errorMessage,
			};

		case 'SN/AUTH/SET_CAPTCHA':
			return {
				...state, captcha: action.captcha,
			};

		default:
			return state;

	}
};

export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export const actions = {

	setAuthUserDataActionCreator: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
		type: 'SN/AUTH/SET_AUTH_USER_DATA',
		payload: {
			id,
			email,
			login,
			isAuth,
		},
	} as const),

	setUserAvatarActionCreatorActionCreator: (userAvatar: string) => ({ type: 'SN/AUTH/SET_USER_PHOTO', userAvatar } as const),

	setErrorMessageActionCreator: (errorMessage: string | null) => ({ type: 'SN/AUTH/SET_ERROR_MESSAGE', errorMessage } as const),

	setCaptchaActionCreator: (captcha: string | null) => ({ type: 'SN/AUTH/SET_CAPTCHA', captcha } as const),

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

export const loginUserThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
	const data = await authAPI.loginUser(email, password, rememberMe, captcha);
	if (data.data.resultCode === 0) {
		await dispatch(authUserThunkCreator());
		dispatch(actions.setCaptchaActionCreator(null));
		dispatch(actions.setErrorMessageActionCreator(null));
	} else if (data.data.resultCode === 1) {
		const [errorMessage] = data.data.messages;
		dispatch(actions.setErrorMessageActionCreator(errorMessage));
	} else if (data.data.resultCode === 10) {
		const captchaUrl = await authAPI.getCaptchaUrl();
		dispatch(actions.setCaptchaActionCreator(captchaUrl.data.url));
	}
};

export const logoutUserThunkCreator = (): ThunkType => async (dispatch) => {
	const response = await authAPI.logoutUser();
	if (response.data.resultCode === 0) {
		dispatch(actions.setAuthUserDataActionCreator(null, null, null, false));
	}
};

export default authReducer;
