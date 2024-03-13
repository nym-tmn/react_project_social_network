import { UserAuthDataType } from '../types/types';
import authReducer, { actions } from './auth_reducer';

const state = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	userAvatar: null,
	errorMessage: null,
	captcha: null,
} as UserAuthDataType;

test('value of isAuth should be changed', () => {
	const action = actions.setAuthUserDataActionCreator(0, '', '', true);
	const newState = authReducer(state, action);
	expect(newState.isAuth).toBe(true);
});

test('after setting user authentication data, authUserData should have the expected properties', () => {
	const action = actions.setAuthUserDataActionCreator(0, '', '', false);
const newState = authReducer(state, action);
	expect(newState).toHaveProperty('id');
	expect(newState).toHaveProperty('email');
	expect(newState).toHaveProperty('login');
	expect(newState).toHaveProperty('isAuth');
});

test('path of user photo should be correct', () => {
	const action = actions.setUserAvatarActionCreatorActionCreator('some path to photo user');
	const newState = authReducer(state, action);
	expect(newState.userAvatar).toBe('some path to photo user');
});

test('error message during authentication should be correct', () => {
	const action = actions.setErrorMessageActionCreator('some error message');
	const newState = authReducer(state, action);
	expect(newState.errorMessage).toBe('some error message');
});

test('captcha URL during authentication should be correct', () => {
	const action = actions.setCaptchaActionCreator('some captcha URL');
	const newState = authReducer(state, action);
	expect(newState.captcha).toBe('some captcha URL');
});
