import { BaseThunkType, InferActionsTypes } from './redux_store';

import { authUserThunkCreator } from './auth_reducer';

const initialState = {
	initialized: false as boolean,
};

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {

		case 'INITIALIZED_SUCCESS':
			return {
				...state, initialized: true,
			};

		default:
			return state;

	}
};

export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const actions = {

	initializedSuccessActionCreator: () => ({ type: 'INITIALIZED_SUCCESS' } as const),

};

export const initializeAppThunkCreator = (): ThunkType => async (dispatch) => {
	const promise = await dispatch(authUserThunkCreator());
	Promise.all([promise])
		.then(() => {
			dispatch(actions.initializedSuccessActionCreator());
		});
};

export default appReducer;
