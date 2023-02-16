
import React from 'react';
import EnterPosts from '../Enter_posts/Enter_posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_page_reducer';
import StoreContext from '../../../../../Store_context';
import Posts from './Posts';


const PostsContainer = (/* props */) => {
	// console.log(props);
	/* let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let updateNewPostText = (postText) => {
		let action = updateNewPostTextActionCreator(postText);
		props.store.dispatch(action);
	};

	return (
		<div>
			<EnterPosts updateNewPostText={updateNewPostText} addPost={addPost} newPostText={state.profilePage.newPostText} />
			<Posts posts={state.profilePage.postsData} />
		</div>
	); */

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					let addPost = () => {
						store.dispatch(addPostActionCreator());
					};
					let updateNewPostText = (postText) => {
						let action = updateNewPostTextActionCreator(postText);
						store.dispatch(action);
					};
					return (
						<div>
							<EnterPosts updateNewPostText={updateNewPostText} addPost={addPost} newPostText={state.profilePage.newPostText} />
							<Posts posts={state.profilePage.postsData} />
						</div>
					);
				}
			}
		</StoreContext.Consumer>
	);
};

export default PostsContainer;