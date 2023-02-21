
import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from "./profile_page_reducer";
import dialogsReducer from "./dialogs_page_reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;