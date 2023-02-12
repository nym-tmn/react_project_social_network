
import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from "./profile_page_reducer";
import dialogsReducer from "./dialogs_page_reducer";

// import { combineReducers, configureStore } from "@reduxjs/toolkit";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

let store = legacy_createStore(reducers);

export default store;

/* let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

let store = configureStore({reducer: reducers});

export default store; */