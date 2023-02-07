
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

	root.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				addPost={store.setAddPost.bind(store)}
				updatePostText={store.setUpdatePostText.bind(store)}
				addMessage={store.setAddMessage.bind(store)}
				updateMessageText={store.setUpdateMessageText.bind(store)} />
		</React.StrictMode>
	);
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
