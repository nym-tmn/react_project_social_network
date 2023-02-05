
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import state, { subscribe } from './components/redux/state';
import { addPost, updatePostText, addMessage, updateMessageText } from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				updatePostText={updatePostText}
				addMessage={addMessage}
				updateMessageText={updateMessageText} />
		</React.StrictMode>
	);
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
