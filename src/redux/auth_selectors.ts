import { AppStateType } from './redux_store';

export const getIsAuth = (state: AppStateType): boolean => {
	return state.auth.isAuth;
};

export const getErrorMessage = (state: AppStateType): string | null => {
	return state.auth.errorMessage;
};

export const getCaptchaUrl = (state: AppStateType): string | null => {
	return state.auth.captcha;
};

export const getLogin = (state: AppStateType): string | null => {
	return state.auth.login;
};

export const getUserAvatar = (state: AppStateType): string | null => {
	return state.auth.userAvatar;
};
