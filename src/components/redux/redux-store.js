// eslint-disable-next-line camelcase
import { combineReducers, legacy_createStore } from 'redux';

import profileReducer from './profile_page_reducer';
import dialogsReducer from './dialogs_page_reducer';
import searchUsersReducer from './search_users_reducer';

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	searchUsersPage: searchUsersReducer,
});

const store = legacy_createStore(reducers);

window.store = store;

export default store;
