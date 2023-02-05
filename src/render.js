
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updatePostText, addMessage, updateMessageText } from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

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
