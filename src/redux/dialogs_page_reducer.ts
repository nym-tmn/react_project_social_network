import { DialogItemDataType, MessagesDataType } from '../types/types';
import { InferActionsTypes } from './redux_store';

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
	dialogItemData: [
		{ id: 1, name: 'Robert_lastName', avatar: require('../assets/images/dialog_avatar.png') },
		{ id: 2, name: 'Sophia_lastName', avatar: require('../assets/images/dialog_avatar.png') },
		{ id: 3, name: 'Alex_lastName', avatar: require('../assets/images/dialog_avatar.png') },
		{ id: 4, name: 'Andrew_lastName', avatar: require('../assets/images/dialog_avatar.png') },
		{ id: 5, name: 'John_lastName', avatar: require('../assets/images/dialog_avatar.png') },
		{ id: 6, name: 'Mary_lastName', avatar: require('../assets/images/dialog_avatar.png') },
	] as Array<DialogItemDataType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

	switch (action.type) {

		case 'SN/DIALOGS_PAGE/SEND_MESSAGE':

			const newMessageFromMe = {
				id: 4,
				messageText: action.newMessageText,
			};

			return {
				...state,
				messagesFromMeData: [...state.messagesFromMeData, newMessageFromMe],
			};

		default:
			return state;

	}
};

export type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {

	sendMessageActionCreator: (newMessageText: string) => ({ type: 'SN/DIALOGS_PAGE/SEND_MESSAGE', newMessageText } as const),

};

export default dialogsReducer;
