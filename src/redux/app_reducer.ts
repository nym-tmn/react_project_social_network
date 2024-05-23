/* eslint-disable no-console */
import { BaseThunkType, InferActionsTypes } from './redux_store';

import { authUserThunkCreator } from './auth_reducer';

const initialState = {
	initialized: false as boolean,
};

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {

		case 'SN/APP/INITIALIZED_SUCCESS':
			return {
				...state, initialized: true,
			};

		default:
			return state;

	}
};

export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export const actions = {

	initializedSuccessActionCreator: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const),

};

export const initializeAppThunkCreator = (): ThunkType => async (dispatch) => {
	try {
		const promise = await dispatch(authUserThunkCreator());
		Promise.all([promise])
			.then(() => {
				dispatch(actions.initializedSuccessActionCreator());
			});
	} catch (e: any) {
		console.error(e.message);
	}
};

export default appReducer;
