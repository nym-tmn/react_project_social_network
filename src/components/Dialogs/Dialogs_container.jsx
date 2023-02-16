
import React from 'react';
import StoreContext from '../../Store_context';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogs_page_reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (/* props */) => {

	/* let state = props.store.getState();

	let sendMessage = () => {
		props.store.dispatch(sendMessageActionCreator());
	};

	let updateNewMessageText = (messageText) => {
		let action = updateNewMessageTextActionCreator(messageText);
		props.store.dispatch(action);
	}; */

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();

					let sendMessage = () => {
						store.dispatch(sendMessageActionCreator());
					};

					let updateNewMessageText = (messageText) => {
						let action = updateNewMessageTextActionCreator(messageText);
						store.dispatch(action);
					};
					return (
						<div>
							<Dialogs dialogs={state.dialogsPage} updateNewMessageText={updateNewMessageText} sendMessage={sendMessage} />
						</div>
					);
				}
			}
		</StoreContext.Consumer>
	);
}

export default DialogsContainer;