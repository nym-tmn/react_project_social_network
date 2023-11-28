// eslint-disable-next-line camelcase
import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profile_page_reducer';
import dialogsReducer from './dialogs_page_reducer';
import searchUsersReducer from './search_users_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	searchUsersPage: searchUsersReducer,
	auth: authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

// export type AppDispatch = typeof store.dispatch

// window.store = store;

export default store;
