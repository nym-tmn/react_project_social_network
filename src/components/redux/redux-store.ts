// eslint-disable-next-line camelcase
import { combineReducers, legacy_createStore } from 'redux';

import profileReducer from './profile_page_reducer';
import dialogsReducer from './dialogs_page_reducer';
import searchUsersReducer from './search_users_reducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	searchUsersPage: searchUsersReducer,
});

const store = legacy_createStore(rootReducer);

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any} > = ReturnType<PropertiesTypes<T>>

// window.store = store;

export default store;
