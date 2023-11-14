import { Dispatch } from 'redux';
import { InferActionsTypes } from './redux-store';

import { UserAuthDataType } from '../types/types';
import { authAPI } from '../api/api';

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	userAvatar: null,
} as UserAuthDataType;

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

	switch (action.type) {

		case 'SET_AUTH_USER_DATA':
			return {
				...state, ...action.data, isAuth: true,
			};

		case 'SET_USER_PHOTO':
			return {
				...state, userAvatar: action.userAvatar,
			};

		default:
			return state;

	}
};

export type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {

	setAuthUserDataActionCreator: (data: UserAuthDataType) => ({ type: 'SET_AUTH_USER_DATA', data } as const),

	setUserAvatarActionCreatorActionCreator: (userAvatar: string) => ({ type: 'SET_USER_PHOTO', userAvatar } as const),
};

export const authUserThunkCreator = () => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		authAPI.authUser().then((authData) => {
			if (authData.resultCode === 0) {
				dispatch(actions.setAuthUserDataActionCreator(authData.data));
				authAPI.getUserPhoto(authData.data.id).then((userPhoto) => {
					dispatch(actions.setUserAvatarActionCreatorActionCreator(userPhoto));
				});
			}
		});
	};
};

export default authReducer;
