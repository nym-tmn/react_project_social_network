import { DialogItemDataType, MessagesDataType } from '../types/types';
import { InferActionsTypes } from './redux-store';

const initialState = {
	messagesToMeData: [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	] as Array<MessagesDataType>,
	messagesFromMeData: [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	] as Array<MessagesDataType>,
	newMessageText: 'new message' as string,
	dialogItemData: [
		{ id: 1, name: 'Robert_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 2, name: 'Sophia_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 3, name: 'Alex_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 4, name: 'Andrew_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 5, name: 'John_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 6, name: 'Mary_lastName', avatar: require('../components/images/dialog_avatar.png') },
	] as Array<DialogItemDataType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

	switch (action.type) {

		case 'SEND_MESSAGE':

			const newMessageFromMe = {
				id: 4,
				messageText: state.newMessageText,
			};

			return {
				...state,
				messagesFromMeData: [...state.messagesFromMeData, newMessageFromMe],
				newMessageText: '',
			};

			/* if (state.newMessageFromMe === '') {
				// alert('Please, enter your message!');
			} else {
				stateCopy.messagesFromMeData.push(newMessageFromMe);
			} */

		case 'UPDATE_NEW_MESSAGE_TEXT':

			return {
				...state,
				newMessageText: action.newMessageText,
			};

		default:
			return state;

	}
};

export type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
	sendMessageActionCreator: () => ({ type: 'SEND_MESSAGE' } as const),

	updateNewMessageTextActionCreator: (messageText: string) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', newMessageText: messageText } as const),
};

export default dialogsReducer;
