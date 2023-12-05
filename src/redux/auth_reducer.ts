import { Dispatch } from 'redux';
import { InferActionsTypes } from './redux_store';

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
		authAPI.authUser().then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(actions.setAuthUserDataActionCreator(response.data.data));
				authAPI.getUserPhoto(response.data.data.id).then((res) => {
					dispatch(actions.setUserAvatarActionCreatorActionCreator(res.data.photos.small));
				});
			}
		});
	};
};

export default authReducer;
